import { ADD_TO_BASKET } from "./basketAction";

export const addToBasket = (item) => {
  return function (dispatch) {
    dispatch({
      type: ADD_TO_BASKET,
      payload: item,
    });
  };
};
