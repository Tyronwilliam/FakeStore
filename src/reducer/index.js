import { combineReducers } from "redux";
// import UserReducer from "./userReducer";
import StoreReducer from "./storeReducer";
const rootReducer = combineReducers({
  //   user: UserReducer,
  article: StoreReducer,
});

export default rootReducer;
