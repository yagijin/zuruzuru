/* default packages */
import * as React from 'react'
import { Helmet } from 'react-helmet'

const GoogleFonts = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&effect=anaglyph|emboss|fire|fire-animation|neon|outline|shadow-multiple|3d|3d-float|"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Noto+Sans+JP:wght@400;700;900&display=swap"
      />
    </Helmet>
  )
}

export default GoogleFonts
