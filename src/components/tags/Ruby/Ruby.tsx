// ルビを振ったインラインテキストを作成するコンポーネント
import * as React from 'react'

type Ruby = {
  text: string
  ruby: string
}

//参考 https://developer.mozilla.org/ja/docs/Web/HTML/Element/ruby
const Ruby = (props: Ruby[]) => {
  return (
    <ruby>
      {props.map((item) => {
        return (
          <>
            {item.text}
            <rp>(</rp>
            <rt>{item.ruby}</rt>
            <rp>)</rp>
          </>
        )
      })}
    </ruby>
  )
}

export default Ruby
