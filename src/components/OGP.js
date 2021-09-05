/* default packages */
import * as React from "react";
import { Helmet } from "react-helmet";

const OGP = (props) => {
  const siteURL = "https://zuruzurura.men";
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta property="og:url" content={siteURL + props.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content="zuruzurura.men" />
      <meta
        property="og:image"
        content={siteURL + "/ogp/ogp_" + props.title + ".png"}
      />
    </Helmet>
  );
};

export default OGP;
