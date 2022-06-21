import { STORE_DATA } from "../action/apiData/action-type";


const initialState = {
  article: [],
};

const StoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_DATA:
      return { article: action.payload };
      

    default:
      return state;
  }

};
export default StoreReducer;
