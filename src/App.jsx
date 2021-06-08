import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import "./App.scss";
import Header from "./components/Header/Header";
import ChatList from "./components/ChatList/ChatList";
import MessageInput from "./components/MessageInput/MessageInput";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ChatList />
      <MessageInput />
      <Footer />
    </div>
  );
}

export default App;
