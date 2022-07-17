import * as React from 'react'
import * as styles from './SNS.module.scss'

type Props = {
  snsList: {
    name: string
    url: string
  }[]
}

const SNS: React.FC<Props> = ({ snsList }) => {
  const sns = snsList.map((value) => {
    return (
      <a
        key={value.name}
        href={value.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.link} not-default`}
      >
        {value.name}
      </a>
    )
  })

  return <div className={styles.container}>{sns}</div>
}

export default SNS
