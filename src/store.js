import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer";
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(reducer, {}, composedEnhancer);

export default store;
