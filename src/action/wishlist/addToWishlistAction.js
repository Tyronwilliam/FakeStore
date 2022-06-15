import { ADD_TO_WISHLIST } from "./action-type";

export const addToWish = (product) => {
  return function (dispatch) {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: product,
    });
  };
};
