import * as React from "react";

const Tags = (props) => {
  const tags = props.tags.map((tag) => {
    return (
      <div key={tag} className="tags-main">
        {tag}
      </div>
    );
  });

  return <div className="tags-container">{tags}</div>;
};

export default Tags;
