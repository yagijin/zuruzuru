/* default packages */
import * as React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  info: {
    title: string
    type: string
    url: string
    description: string
  }
  filename?: string
}

const Head = (props: Props) => {
  const siteURL = 'https://zuruzurura.men'
  return (
    <Helmet>
      <title>{props.info.title}</title>
      <meta property="og:url" content={siteURL + props.info.url} />
      <meta property="og:type" content={props.info.type} />
      <meta property="og:title" content={props.info.title} />
      <meta property="og:description" content={props.info.description} />
      <meta property="og:site_name" content="zuruzurura.men" />
      <meta
        property="og:image"
        content={`${siteURL}/ogp/${props.filename ?? 'ogp_main.png'}`}
      />
    </Helmet>
  )
}

export default Head
