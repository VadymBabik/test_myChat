import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import chatReducer from "./chat/chatReducer";
import inputReducer from "./input/inputReducer";
import messageReducer from "./message/messageReducer";
import countReducer from "./count/countReducer";
// import { getCountMassage } from "./count/actionCreators";

const rootReducer = combineReducers({
  chat: chatReducer,
  input: inputReducer,
  message: messageReducer,
  counter: countReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// store.subscribe(() => {
//   dispatch(getCountMassage());
// });

export default store;
