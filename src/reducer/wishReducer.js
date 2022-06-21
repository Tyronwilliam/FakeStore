import { ADD_TO_WISHLIST } from "../action/wishlist/action-type";
import { DELETE_TO_WISHLIST } from "../action/wishlist/action-type";

const initialState = {
  product: [],
};

const WishReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const same = state.product?.find((item) => item.id === action.payload.id);
      return same
        ? { product: [...state.product] }
        : { product: [...state.product, action.payload] };

    case DELETE_TO_WISHLIST:
      return {
        ...state,
        product: state.product.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
export default WishReducer;
