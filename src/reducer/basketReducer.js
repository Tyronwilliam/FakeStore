import { ADD_TO_BASKET } from "../action/basket/action-type";
import { DELETE_ITEM_BASKET } from "../action/basket/action-type";
const initialState = {
  item: [],
};

const BasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const sameItem = state.item?.find(
        (items) => items.id === action.payload.id
      );
      return sameItem
        ? [...state.item]
        : { item: [...state.item, action.payload] };

    case DELETE_ITEM_BASKET:
      return {
        ...state,
        item: state.item.filter((items) => items.id !== action.payload),
      };
    default:
      return state;
  }
};
export default BasketReducer;
