import React from "react";
import s from "./Message.module.scss";

const Message = ({ mesage, toggleFavorite }) => {
  const { avatar, created_at, message, user, isFavorite } = mesage;

  const isAutor = JSON.parse(localStorage.getItem("User")) === user;
  return (
    <div className="row container">
      <div
        className={`${s.message}  ${isAutor ? " act offset-l6 l6" : "l6"} ${
          isAutor && s.autor
        } col`}
      >
        <img className={s.avatar} src={avatar} alt={user} />
        <div className={s.content}>
          <div className={s.title}>
            <h5 className={s.user}>{user}</h5>
            <span className={s.data}>{created_at}</span>
          </div>
          <p className={s.text}>{message}</p>
          {!isAutor ? (
            <div className={s.favorite} onClick={toggleFavorite}>
              {isFavorite ? (
                <i className="material-icons">favorite</i>
              ) : (
                <i className="material-icons">favorite_border</i>
              )}
            </div>
          ) : (
            <div className={s.editMessage}>
              <i className={`${s.edit} material-icons`}>edit</i>
              <i className={`${s.delete} material-icons`}>delete</i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
