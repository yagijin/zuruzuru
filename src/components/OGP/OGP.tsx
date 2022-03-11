/* default packages */
import * as React from "react";
import { Helmet } from "react-helmet";

type Props = {
  title: string
  url: string
  description: string
}

const OGP = (props: Props) => {
  const siteURL = "https://zuruzurura.men";
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta property="og:url" content={siteURL + props.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content="zuruzurura.men" />
      {/* Todo：多分urlに不整合が起こるケースがあるので直す */}
      <meta
        property="og:image"
        content={siteURL + "/ogp/ogp_" + props.title.toLocaleLowerCase() + ".png"}
      />
    </Helmet>
  );
};

export default OGP;
