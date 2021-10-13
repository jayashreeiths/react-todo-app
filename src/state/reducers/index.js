import {combineReducers} from "redux";
import TodoReducer from "../reducers/todoReducer";

const reducers = combineReducers({
   // key:value todo is key and TodoReducer is value 
    todo : TodoReducer
})

export default reducers;