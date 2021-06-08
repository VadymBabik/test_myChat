import * as types from "./actions";
import { chatFetch, toggleFavorite } from "./operations";

const initialState = {
  isLoading: false,
  isError: null,
  messages: JSON.parse(localStorage.getItem("chatMessages")) || [],
};
const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHAT_LOADING:
      return { ...state, isLoading: true };
    case types.CHAT_ERROR: {
      return { ...state, isError: action.payload, isLoading: false };
    }
    case types.CHAT_FETCH: {
      const chat = chatFetch(action.payload);
      return {
        ...state,
        messages: chat,
        isLoading: false,
      };
    }
    case types.CHAT_TOGGLE_FAVORITE: {
      const setFavorite = toggleFavorite(state, action.payload);
      return { ...state, messages: setFavorite };
    }
    default:
      return state;
  }
};

export default chatReducer;
