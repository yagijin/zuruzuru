import * as React from "react";

const Title = (props) => {
  return (
    <h2 id={"title-" + props.title} className="title-main">
      <span>{`${props.title} ${props.emoji}`}</span>
    </h2>
  );
};

export default Title;
