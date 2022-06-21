import { combineReducers } from "redux";
// import UserReducer from "./userReducer";
import StoreReducer from "./storeReducer";
import WishReducer from "./wishReducer";
import BasketReducer from "./basketReducer";
const rootReducer = combineReducers({
  //   user: UserReducer,
  article: StoreReducer,
  product: WishReducer,
  item: BasketReducer,
});

export default rootReducer;
