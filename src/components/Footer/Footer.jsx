import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${s.footer} page-footer`}>
      <div className="container">
        <div className="row">
          <div className="col m4 s12  center-align">
            <a className={s.link} href="/">
              Home
            </a>
          </div>
          <div className="col m4 s12 center-align">
            <a className={s.link} href="/">
              About
            </a>
          </div>
          <div className="col m4 s12 center-align">
            <a className={s.link} href="/">
              Contact us
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col s12 center-align">© Copyright 2019</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
