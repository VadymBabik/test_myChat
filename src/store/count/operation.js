import { getLocalStorage } from "../operation";
import { format } from "date-fns";

const pattern = "yyyy-MM/dd HH:mm:ss";
format(new Date(), pattern);

export const getCount = () => {
  const data = getLocalStorage();
  const countMessages = data.length;
  const countUser = new Set(data.map((e) => e.user)).size;
  const MessageData = [...new Set(data.map((e) => e.created_at))];
  const arMessageData = MessageData.map((e) => Date.parse(e));
  const maxMessageData = Math.max(...arMessageData);
  const lastMessageData = format(new Date(maxMessageData), pattern);
  return { countUser, countMessages, lastMessageData };
};
