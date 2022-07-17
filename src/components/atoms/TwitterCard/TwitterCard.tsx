/* default packages */
import * as React from 'react'
import { Helmet } from 'react-helmet'

type Props = {
  children: React.ReactNode
}

const Twitter = (props: Props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Helmet>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </Helmet>
      {props.children /*twitterのblockquoteを渡す*/}
    </div>
  )
}

export default Twitter
