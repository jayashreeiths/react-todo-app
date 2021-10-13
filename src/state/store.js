import { createStore,applyMiddleware } from "redux"; 
import reducers from "./reducers/index";
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)//dispatch is async function. To use dispatch we have to install middleware redux-thunk
    )