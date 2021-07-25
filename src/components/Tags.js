import * as React from "react";
import { Link } from "gatsby";

const Tags = (props) => {
  const tags = props.tags.map((tag) => {
    return (
      <div
        key={tag}
        className={props.isSmall == true ? "tags-main tags-small" : "tags-main"}
      >
        {tag}
      </div>
    );
  });

  return <div className="tags-container">{tags}</div>;
};

export default Tags;
