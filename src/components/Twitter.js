/* default packages */
import * as React from "react";
import { Helmet } from "react-helmet";

const Twitter = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Helmet>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Helmet>
      {props.children /*twitterのblockquoteを渡す*/}
    </div>
  );
};

export default Twitter;
