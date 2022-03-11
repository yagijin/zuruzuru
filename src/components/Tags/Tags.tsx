import * as React from 'react'
import * as styles from './Tags.module.scss'

type Props = {
  tags: string[]
}

const Tags = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.tags.map((tag) => {
        return (
          <div key={tag} className={styles.tag}>
            {tag}
          </div>
        )
      })}
    </div>
  )
}

export default Tags
