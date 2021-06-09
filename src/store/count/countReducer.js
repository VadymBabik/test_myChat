import * as types from "./actions";
import { getCount } from "./operation";

const initialState = {
  countUser: 0,
  countMessages: 0,
  lastMessageData: "",
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COUNT_MASSAGE:
      const fff = getCount(state);
      console.log("fff", fff);
      return { ...state, ...fff };

    default:
      return state;
  }
};

export default countReducer;
