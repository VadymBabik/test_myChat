import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import chatReducer from "./chat/chatReducer";
import inputReducer from "./input/inputReducer";
import messageReducer from "./message/messageReducer";

const rootReducer = combineReducers({
  chat: chatReducer,
  input: inputReducer,
  message: messageReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
