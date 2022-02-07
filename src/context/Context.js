import { createContext, useContext, useReducer } from "react";
import { sections } from "../data/itemLists";

const Cart = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            };
        case "CHANGE_ITEM_QTY":
            return {
                ...state,
                cart: state.cart.filter((item) =>
                    item.id === action.payload.id ? (item.qty = action.payload.qty) : item.qty
                )
            };
        case "SORT_BY_NAME":
            return {
                ...state,
                sections: state.sections.filter((section, index) => 
                    index === action.payload ? section.sort((a, b) => a.name > b.name ? 1 : -1) : section
                )
            }
        case "SORT_BY_PRICE":
            return {
                ...state,
                sections: state.sections.filter((section, index) => 
                    index === action.payload ? section.sort((a, b) => a.price - b.price) : section
                )
            }
        default:
            return state;
    }
};

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, {
        sections,
        cart: []
    });

    const totals = [{ quantity: state.cart.reduce((acc, curr) => acc + Number(curr.qty), 0) },
    { price: (state.cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)).toFixed(2) }];

    return (
        <Cart.Provider value={{ state, dispatch, totals }}>{children}</Cart.Provider>
    );
}

export const CartState = () => {
    return useContext(Cart);
}

export default Context;
