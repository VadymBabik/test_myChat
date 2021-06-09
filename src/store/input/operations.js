import uniqid from "uniqid";
import { format } from "date-fns";
const User = () => {
  if (localStorage.getItem("User")) {
    return JSON.parse(localStorage.getItem("User"));
  }
  localStorage.setItem("User", JSON.stringify("Anonymous"));
  return "Anonymous";
};

const pattern = "yyyy-MM-dd HH:mm:ss";
export const sendInput = (state) => {
  const newMessage = () => ({
    id: uniqid(),
    avatar: "https://studzona.com/img/user-menu.png",
    created_at: format(new Date(), pattern),
    isFavorite: false,
    message: state.message,
    user: User(),
  });
  const chatMessages = JSON.parse(localStorage.getItem("chatMessages"));
  chatMessages.push(newMessage());
  setLocalStorage(chatMessages);
  return {
    id: "",
    avatar: "",
    created_at: null,
    isFavorite: false,
    message: "",
    user: "",
  };
};

const setLocalStorage = (item) =>
  localStorage.setItem("chatMessages", JSON.stringify(item));
