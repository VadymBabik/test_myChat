import * as types from "./actions";

export const messageEdit = (payload) => ({ type: types.MESSAGE_EDIT, payload });
export const messageIsEdit = (payload) => ({
  type: types.MESSAGE_IS_EDIT,
  payload,
});
export const messageSend = (payload) => ({ type: types.MESSAGE_SEND, payload });
export const messageSetText = (payload) => ({
  type: types.MESSAGE_SET_TEXT,
  payload,
});
