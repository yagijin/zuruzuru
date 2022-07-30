// 入力端末からのユーザーによる文字入力を表すインライン要素のコンポーネント
import * as React from 'react'
import * as styles from './Keyboard.module.scss'

// 参考：https://developer.mozilla.org/ja/docs/Web/HTML/Element/kbd
const Keyboard = ({ children }: { children: string }) => {
  return <kbd className={styles['key']}>{children}</kbd>
}

export default Keyboard
