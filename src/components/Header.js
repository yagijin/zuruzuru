import * as React from "react";
import { Link } from "gatsby";

const Header = (props) => {
  return (
    <>
      <header className="header-main">
        <Link to={props.link} className="header-title not-default">
          <h1>
            <span className="header-name">{props.title}🍜</span>
            <span className="header-zuruzuru">&lt; ズルズル </span>
          </h1>
        </Link>
        <Link to="/" className="not-default">
          <p>＞Topへ</p>
        </Link>
      </header>
    </>
  );
};

export default Header;
