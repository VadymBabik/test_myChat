import * as types from "./actions";
import { sendInput } from "./operations";

const initialState = {
  id: "",
  avatar: "",
  created_at: null,
  isFavorite: false,
  message: "",
  user: "",
};
const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INPUT_MESSAGE:
      return { ...state, message: action.payload };
    case types.INPUT_SEND:
      const send = sendInput(state);
      return { ...state, ...send };
    default:
      return state;
  }
};

export default inputReducer;
