import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import "../styles/header.scss";

const Header = () => {
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
      <header className="header">
        <Link to="/" className="title">
          <h1>
            <span className="title-main">BLOG🍜</span>
            <span className="zuruzuru">&lt; ズルズル </span>
          </h1>
        </Link>
      </header>
    </>
  );
};

export default Header;
