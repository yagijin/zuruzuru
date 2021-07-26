import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

const Footer = () => {
  return (
    <>
      <footer className="footer-main">
        <Link to="/privacy">Privacy Policy</Link>
        <p>© 2019-{new Date().getFullYear()} yagijin, All Rights Reserved.</p>
      </footer>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </>
  );
};

export default Footer;
