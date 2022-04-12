import { STORE_DATA } from "./action-type";
export const loadData = (article) => {
  return function (dispatch) {
    dispatch({
      type: STORE_DATA,
      payload: article,
    });
  };
};