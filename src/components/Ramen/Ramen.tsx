import * as React from 'react'
import * as styles from './Ramen.module.scss'

import { makeRamen } from '../../../lib/make-ramen'

const Ramen = () => {
  const handleOnClick = () => {
    for (let i = 0; i < 3; i++) {
      makeRamen(document.getElementsByTagName('body')[0])
    }
  }

  return (
    <div className={styles.container}>
      <span onClick={handleOnClick}>🍜</span>
      <span>&lt; ズルズル </span>
    </div>
  )
}

export default Ramen
