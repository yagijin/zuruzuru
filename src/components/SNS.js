import * as React from "react";
import { Link } from "gatsby";

const SNS = () => {
  const snsList = [
    { name: "Github", url: "https://github.com/yagijin" },
    { name: "Twitter", url: "https://twitter.com/yagijinjin" },
    { name: "Instagram", url: "https://www.instagram.com/yagijimjim" },
    { name: "Blog", url: "https://zuruzurura.men/blogs" },
  ];

  const sns = snsList.map((value) => {
    return (
      <a
        key={value.name}
        href={value.url}
        target="_blank"
        rel="noopener"
        className="sns-main not-default"
      >
        {value.name}
        {/*<img src={"./social/" + value.name.toLowerCase + ".svg"} />*/}
      </a>
    );
  });

  return <div className="sns-container">{sns}</div>;
};

export default SNS;
