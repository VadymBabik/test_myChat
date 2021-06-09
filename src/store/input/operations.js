import uniqid from "uniqid";
import { format } from "date-fns";
import { getLocalStorage, setLocalStorage } from "../operation";

const pattern = "yyyy-MM-dd HH:mm:ss";
export const sendInput = (state) => {
  const newMessage = () => ({
    id: uniqid(),
    avatar: "https://studzona.com/img/user-menu.png",
    created_at: format(new Date(), pattern),
    isFavorite: false,
    message: state.message,
    user: JSON.parse(localStorage.getItem("User")),
  });
  const chatMessages = getLocalStorage();
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
