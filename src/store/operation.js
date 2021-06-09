export const setLocalStorage = (item) =>
  localStorage.setItem("chatMessages", JSON.stringify(item));
export const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("chatMessages"));
