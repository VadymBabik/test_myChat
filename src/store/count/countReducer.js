import * as types from "./actions";
import { chatFetch, toggleFavorite } from "./operations";
import { countMessages } from "./operation";

const initialState = {
  countUser: 0,
  countMessages: 0,
  lastMessage: "",
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COUNT_MASSAGE:
      const fff = countMessages(state);
      console.log(fff);
      return { fff };

    default:
      return state;
  }
};

export default countReducer;
