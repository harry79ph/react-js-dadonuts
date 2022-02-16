import { createStore } from "redux";
import rootReducer from "./rootReducer";
// Store is one big cenralized place where all of our state data is stored

const store = createStore(rootReducer);// First we create store

export default store;