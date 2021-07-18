import * as React from "react";
import { Link } from "gatsby";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      © 2019-{new Date().getFullYear()} yagijin, All Rights Reserved.
      <Link to="/privacy">Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
