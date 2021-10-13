const reducer = (state = 0, action) => {
    //const reducer = (state = false, action) => {
    switch(action.type){
        case "plus" :
            return state + action.payload;
        case "minus" :
            return state - action.payload;
        default :
            return state
    }
};

export default reducer;