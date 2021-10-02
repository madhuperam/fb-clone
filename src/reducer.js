export const initialState = {
    user: null,
};

export const actionTypes ={
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    // if SET_USER action is found then keep the remaining state same
    // and update the user to the new user else just return the state
    switch(action.type){
        case actionTypes.SET_USER:  
            return{
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};

export default reducer;