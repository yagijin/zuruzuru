import * as React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/tags.module.scss";

const Tags = (props) => {
  const tags = props.tags.map((tag) => {
    return (
      <div
        key={tag}
        className={
          props.isSmall == true ? `${styles.small} ${styles.tag}` : styles.tag
        }
      >
        {tag}
      </div>
    );
  });

  return <div className={styles.tags}>{tags}</div>;
};

export default Tags;
