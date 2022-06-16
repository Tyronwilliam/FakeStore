import { combineReducers } from "redux";
// import UserReducer from "./userReducer";
import StoreReducer from "./storeReducer";
import WishReducer from "./wishReducer";
const rootReducer = combineReducers({
  //   user: UserReducer,
  article: StoreReducer,
  product: WishReducer,
});

export default rootReducer;
