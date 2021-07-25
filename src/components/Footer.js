import * as React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="footer-main">
      <p>© 2019-{new Date().getFullYear()} yagijin, All Rights Reserved.</p>
      <p>
        <Link to="/privacy">Privacy Policy</Link>
      </p>
    </footer>
  );
};

export default Footer;
