import * as React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2019-{new Date().getFullYear()} yagijin, All Rights Reserved.</p>
      <p>
        <Link to="/privacy">Privacy Policy</Link>
      </p>
    </footer>
  );
};

export default Footer;
