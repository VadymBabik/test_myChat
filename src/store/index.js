import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import chatReducer from "./chat/chatReducer";
import inputReducer from "./input/inputReducer";

const rootReducer = combineReducers({
  chat: chatReducer,
  input: inputReducer,
  // cart: cartReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
