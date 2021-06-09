import React, { useEffect } from "react";
import s from "./ChatList.module.scss";
import Preloader from "../Preloader/Preloader";
import Title from "../Title/Title";
import Message from "../Message/Message";
import { useDispatch, useSelector } from "react-redux";
import { loadingChat } from "../../store/chat/operations";
import { favorite } from "../../store/chat/actionCreators";
import { getCountMassage } from "../../store/count/actionCreators";

const ChatList = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, messages } = useSelector((state) => state.chat);

  useEffect(() => {
    if (!localStorage.getItem("User")) {
      localStorage.setItem("User", JSON.stringify("Anonymous"));
    }
    if (messages.length) {
      dispatch(getCountMassage());
      return localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
    dispatch(loadingChat());
  }, [dispatch, messages]);

  return (
    <div className={s.wrapper}>
      {isLoading && <Preloader />}
      {isError && <Title text={isError} />}
      {messages.length &&
        messages.map((e) => {
          return (
            <Message
              mesage={e}
              key={e.id}
              toggleFavorite={() => dispatch(favorite(e.id))}
            />
          );
        })}
    </div>
  );
};

export default ChatList;
