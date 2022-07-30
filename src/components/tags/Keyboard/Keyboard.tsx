// 入力端末からのユーザーによる文字入力を表すインライン要素のコンポーネント
import * as React from 'react'
import * as styles from './Keyboard.module.scss'

// 参考：https://developer.mozilla.org/ja/docs/Web/HTML/Element/kbd
const Keyboard = ({ text }: { text: string }) => {
  return <kbd className={styles['key']}>{text}</kbd>
}

export default Keyboard
