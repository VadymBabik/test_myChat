import * as types from "./actions";
import { editMessage } from "./operations";

const initialState = {
  messagesId: null,
  isEdit: false,
  messagesText: "",
};
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MESSAGE_EDIT: {
      return { ...state, isError: action.payload, isLoading: false };
    }
    case types.MESSAGE_SET_TEXT: {
      return { ...state, messagesText: action.payload };
    }
    case types.MESSAGE_SEND: {
      const message = editMessage(state, action.payload);
      return { ...state, messagesText: message, isEdit: !state.isEdit };
    }
    case types.MESSAGE_IS_EDIT: {
      return { ...state, isEdit: !state.isEdit, messagesId: action.payload };
    }
    default:
      return state;
  }
};

export default messageReducer;
