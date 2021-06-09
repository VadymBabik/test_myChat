import s from "./Header.module.scss";
// import { useEffect } from "react";
// import { getCountMassage } from "../../store/count/actionCreators";
// import { useDispatch } from "react-redux";

const Header = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCountMassage());
  // }, []);
  return (
    <header className={`${s.header} navbar-fixed`}>
      <nav>
        <div className="nav-wrapper container">
          <a className={`${s.logo} brand-logo`} href="/">
            My Chat
          </a>
          <span className={`${s.count} hide-on-med-and-down`}>
            7 users 9 messages
          </span>
          <div className="right hide-on-med-and-down">
            <span>Last message: 2019-08/18 15:15:07</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
