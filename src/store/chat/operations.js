import axios from "axios";
import { fetchChat, isError, isLoading } from "./actionCreators";

export const chatFetch = (payload) => {
  const updateChat = payload.map((e) => {
    return { ...e, isFavorite: false };
  });
  setLocalStorage(updateChat);
  return updateChat;
};

export const toggleFavorite = (state, payload) => {
  const updateChat = state.messages.map((e) =>
    e.id === payload ? { ...e, isFavorite: !e.isFavorite } : e
  );
  setLocalStorage(updateChat);
  return updateChat;
};

export const loadingChat = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading());
      const response = await axios(
        "https://run.mocky.io/v3/b13799bf-0bf4-4a74-bf46-b7a2fb35a8c8"
      );
      dispatch(fetchChat(response.data));
    } catch (e) {
      dispatch(isError(e));
    }
  };
};

const setLocalStorage = (item) =>
  localStorage.setItem("chatMessages", JSON.stringify(item));
