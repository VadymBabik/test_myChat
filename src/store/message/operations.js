import { getLocalStorage, setLocalStorage } from "../operation";

export const editMessage = (state, payload) => {
  const cartUpdate = getLocalStorage().map((e) =>
    e.id === state.messagesId ? { ...e, message: payload } : e
  );
  setLocalStorage(cartUpdate);
  return payload;
};
