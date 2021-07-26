import * as React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="footer-main">
      <p className="footer-right">
        <span>© 2019-{new Date().getFullYear()} </span>
        <span>yagijin, All Rights Reserved.</span>
      </p>
      <p>
        <Link to="/privacy">Privacy Policy</Link>
      </p>
    </footer>
  );
};

export default Footer;
