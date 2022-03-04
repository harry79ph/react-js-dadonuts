import { combineReducers } from "redux";
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    shop: cartReducer,
});

export default rootReducer;