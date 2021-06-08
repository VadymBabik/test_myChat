export const countMessages = (store) => {
  if (localStorage.getItem("chatMessages")) {
    const message = JSON.parse(localStorage.getItem("chatMessages")).length;
    const user = JSON.parse(localStorage.getItem("chatMessages")).filter(
      (e) => e.user
    );
    return { ...store, countUser: user, countMessages: message };
  }
  return { ...store, countUser: 0, countMessages: 0 };
};
