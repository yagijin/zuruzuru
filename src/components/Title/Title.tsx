import * as React from 'react'
import * as styles from './Title.module.scss'

type Props = {
  title: string
  emoji: string
}

const Title = (props: Props) => {
  return (
    <h2 id={'title-' + props.title} className={styles.title}>
      <span>{`${props.title} ${props.emoji}`}</span>
    </h2>
  )
}

export default Title
