import { combineReducers } from "redux";//to combine all reducers
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    shop: cartReducer,
});

export default rootReducer;