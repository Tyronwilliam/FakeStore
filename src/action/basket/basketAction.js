import { ADD_TO_BASKET } from "./action-type";
import { DELETE_ITEM_BASKET } from "./action-type";
export const addToBasket = (item) => {
  return function (dispatch) {
    dispatch({
      type: ADD_TO_BASKET,
      payload: item,
    });
  };
};
export const deleteItemBasket = (item) => {
  return function (dispatch) {
    dispatch({
      type: DELETE_ITEM_BASKET,
      payload: item,
    });
  };
};
