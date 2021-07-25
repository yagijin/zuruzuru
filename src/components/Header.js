import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

const Header = (props) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <header className="header-main">
        <Link to={props.link} className="header-title not-default">
          <h1>
            <span className="header-name">{props.title}🍜</span>
            <span className="header-zuruzuru">&lt; ズルズル </span>
          </h1>
        </Link>
      </header>
    </>
  );
};

export default Header;
