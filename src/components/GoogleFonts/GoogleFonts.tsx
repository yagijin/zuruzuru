/* default packages */
import * as React from "react";
import { Helmet } from "react-helmet";

const GoogleFonts = () => {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&effect=anaglyph|emboss|fire|fire-animation|neon|outline|shadow-multiple|3d|3d-float|"
      />
    </Helmet>
  );
};

export default GoogleFonts;
