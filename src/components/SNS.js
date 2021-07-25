import * as React from "react";
import { Link } from "gatsby";

const SNS = () => {
  const snsList = [
    { name: "github", url: "https://github.com/yagijin" },
    { name: "twitter", url: "https://twitter.com/yagijinjin" },
    { name: "instagram", url: "https://www.instagram.com/yagijimjim" },
    { name: "blog", url: "https://zuruzurura.men/blogs" },
  ];

  const sns = snsList.map((value) => {
    return (
      <a
        key={value.name}
        href={value.url}
        target="_blank"
        rel="noopener"
        className="sns-main"
      >
        <img src={"./social/" + value.name + ".svg"} />
      </a>
    );
  });

  return <div className="sns-container">{sns}</div>;
};

export default SNS;
