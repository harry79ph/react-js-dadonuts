
const initialState = {
    user: ""
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {  ...state, user: action.payload }
        case "REMOVE_USER":
            return {  ...state, user: "" }
        default:
            return state;
    }
};

export default authReducer;