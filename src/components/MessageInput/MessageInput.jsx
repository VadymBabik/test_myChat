import s from "./MessageInput.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { inputMessage, inputSend } from "../../store/input/actionInput";
import { chatUpdate } from "../../store/chat/actionCreators";

const MessageInput = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.input);

  const sendMassage = (event) => {
    if (event.key === "Enter") {
      dispatch(inputSend());
      dispatch(chatUpdate());
    }
  };
  return (
    <div className={s.wrapper}>
      <div className="container">
        <div className={`${s.content} row`}>
          <div
            className={`${s.inputWrapper} input-field col m10 s12  center-align`}
          >
            <input
              className={s.inputText}
              placeholder="Type something..."
              value={message}
              onChange={(event) => dispatch(inputMessage(event.target.value))}
              onKeyPress={sendMassage}
              type="text"
            />
          </div>
          <div className="col m2 s12  center-align">
            <span
              onClick={() => {
                dispatch(inputSend());
                dispatch(chatUpdate());
              }}
              className={`${s.btn} waves-effect waves-light btn-large`}
            >
              Send
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
