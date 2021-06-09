import s from "./Header.module.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const { countUser, countMessages, lastMessageData } = useSelector(
    (state) => state.counter
  );
  return (
    <header className={`${s.header} navbar-fixed`}>
      <nav>
        <div className="nav-wrapper container">
          <a className={`${s.logo} brand-logo`} href="/">
            My Chat
          </a>
          <span className={`${s.count} hide-on-med-and-down`}>
            {countUser} users {countMessages} messages
          </span>
          <div className="right hide-on-med-and-down">
            <span className={s.lastMessage}>
              Last message: {lastMessageData}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
