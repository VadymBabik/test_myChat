import * as types from "./actions";

export const isLoading = () => ({ type: types.CHAT_LOADING });
export const isError = (payload) => ({ type: types.CHAT_ERROR, payload });
export const deleteMessage = (payload) => ({
  type: types.CHAT_DELETE_MESSAGE,
  payload,
});
export const chatUpdate = (payload) => ({ type: types.CHAT_UPDATE, payload });
export const fetchChat = (payload) => ({
  type: types.CHAT_FETCH,
  payload,
});
export const favorite = (payload) => ({
  type: types.CHAT_TOGGLE_FAVORITE,
  payload,
});
