import React from "react";
import s from "./Message.module.scss";

const Message = ({ mesage, toggleFavorite }) => {
  const { avatar, created_at, message, user, isFavorite } = mesage;
  return (
    <div className="row container">
      <div className={`${s.message} col l6`}>
        <img className={s.avatar} src={avatar} alt={user} />
        <div className={s.content}>
          <div className={s.title}>
            <h5 className={s.user}>{user}</h5>
            <span className={s.data}>{created_at}</span>
          </div>
          <p className={s.text}>{message}</p>
          <div className={s.favorite} onClick={toggleFavorite}>
            {isFavorite ? (
              <i className="material-icons">favorite</i>
            ) : (
              <i className="material-icons">favorite_border</i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
