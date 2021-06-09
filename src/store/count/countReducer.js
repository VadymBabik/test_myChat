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
      const count = getCount(state);
      return { ...state, ...count };

    default:
      return state;
  }
};

export default countReducer;
