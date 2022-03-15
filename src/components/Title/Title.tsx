import * as React from 'react'
import * as styles from './Title.module.scss'
import Ramen from '../Ramen'

type Props = {
  title: string
  emoji?: string
}

const Title = (props: Props) => {
  return (
    <h2 id={'title-' + props.title} className={styles.title}>
      {props.emoji == '🍜' ? (
        <>
          <span>{`${props.title} `}</span>
          <Ramen />
        </>
      ) : (
        <span>{`${props.title} ${props.emoji ?? ''}`}</span>
      )}
    </h2>
  )
}

export default Title
