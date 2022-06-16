import { STORE_DATA } from "../action/apiData/action-type";
import { ADD_TO_WISHLIST } from "../action/wishlist/action-type";
import { ADD_TO_BASKET } from "../action/basket/action-type";

const initialState = {
  article: [],
};

const StoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_DATA:
      return { article: action.payload };
      break;
    // case ADD_TO_WISHLIST:
    //   return { product: action.payload };
    //   break;
    // case ADD_TO_BASKET:
    //   return { item: action.payload };
    //   break;
    default:
      return state;
      break;
  }

  return state;
};
export default StoreReducer;
