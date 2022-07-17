import * as React from 'react'
import * as styles from './Marquee.module.scss'

const Marquee = () => {
  return (
    <div className={styles.marquee}>
      <div>
        <span className={styles.emoji}>🍜 🐐</span>
      </div>
    </div>
  )
}

export default Marquee
