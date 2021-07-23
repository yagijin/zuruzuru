import * as React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import * as styles from "../styles/header.module.scss";

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
      <header className={styles.header}>
        <Link to={props.link} className={styles.title}>
          <h1>
            <span className={styles.name}>{props.title}🍜</span>
            <span className={styles.zuruzuru}>&lt; ズルズル </span>
          </h1>
        </Link>
      </header>
    </>
  );
};

export default Header;
