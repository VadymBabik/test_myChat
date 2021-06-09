import React from "react";
import s from "./Message.module.scss";
import { chatUpdate, deleteMessage } from "../../store/chat/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import {
  messageIsEdit,
  messageSend,
  messageSetText,
} from "../../store/message/actionMessage";

const Message = ({ mesage, toggleFavorite }) => {
  const dispatch = useDispatch();
  const { isEdit, messagesText, messagesId } = useSelector(
    (state) => state.message
  );
  const { id, avatar, created_at, message, user, isFavorite } = mesage;
  const editMassage = (event) => {
    if (event.key === "Enter") {
      dispatch(messageSend(messagesText));
      dispatch(chatUpdate());
    }
  };
  const isAuthor = JSON.parse(localStorage.getItem("User")) === user;
  return (
    <div className="row container">
      <div
        className={`${s.message}  ${isAuthor ? " act offset-l6 l6" : "l6"} ${
          isAuthor && s.author
        } col`}
      >
        <img className={s.avatar} src={avatar} alt={user} />
        <div className={s.content}>
          <div className={s.title}>
            <h5 className={s.user}>{user}</h5>
            <span className={s.data}>{created_at}</span>
          </div>
          {isAuthor && isEdit && messagesId === id ? (
            <div className={`${s.inputEdit} input-field`}>
              <input
                className={s.inputText}
                value={messagesText}
                onChange={(event) =>
                  dispatch(messageSetText(event.target.value))
                }
                onKeyPress={editMassage}
                type="text"
              />
            </div>
          ) : (
            <p className={s.text}>{message}</p>
          )}
          {!isAuthor ? (
            <div className={s.favorite} onClick={toggleFavorite}>
              {isFavorite ? (
                <i className="material-icons">favorite</i>
              ) : (
                <i className="material-icons">favorite_border</i>
              )}
            </div>
          ) : (
            <div className={s.editMessage}>
              <i
                onClick={() => {
                  dispatch(messageSetText(message));
                  dispatch(messageIsEdit(id));
                }}
                className={`${s.edit} material-icons`}
              >
                edit
              </i>
              <i
                onClick={() => dispatch(deleteMessage(id))}
                className={`${s.delete} material-icons`}
              >
                delete
              </i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
