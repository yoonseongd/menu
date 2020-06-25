import { GET_ITEMS } from "../action";

const initailState = {
  items: [],
};

const navReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        items: [...state.items, action.items],
      };
    default:
      return state;
  }
};
export default navReducer;
