export const todoPlusCount = (todoCount)=>{
    //create action to dispatch
    //return action as function which takes dispatch as parameter

    return (dispatch) =>{
        //Call dispatch
        dispatch({
            //It takes action
            type:"plus",
            payload:todoCount
        })
    }
}

export const todoMinusCount = (todoCount)=>{
    //create action to dispatch
    //return action as function which takes dispatch as parameter

    return (dispatch) =>{
        //Call dispatch
        dispatch({
            //It takes action with type,payload
            type:"minus",
            payload:todoCount
        })
    }
}