import { createContext, useContext, useReducer } from "react";
import { allProducts } from "../components/itemLists";

const Cart = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload.id)
            };
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.filter((c) =>
                    c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                )
            };
        default:
            return state;
    }
};

const Context = ({ children }) => {// children is the components that receive the context

    const [state, dispatch] = useReducer(cartReducer, {
        products: allProducts,//Muhtemelen bu app de ihtiyacin olmayacak
        cart: []
    });

    return (
        <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>
    );
}

export const CartState = () => {
    return useContext(Cart);
}
 
export default Context;
