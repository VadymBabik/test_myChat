import * as types from "./actions";

export const inputSend = () => ({ type: types.INPUT_SEND });
export const inputMessage = (payload) => ({
  type: types.INPUT_MESSAGE,
  payload,
});
