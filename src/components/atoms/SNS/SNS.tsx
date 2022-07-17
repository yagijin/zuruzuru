import * as React from 'react'
import * as styles from './SNS.module.scss'

const SNS = () => {
  const snsList = [
    { name: 'Github', url: 'https://github.com/yagijin' },
    { name: 'Twitter', url: 'https://twitter.com/yagijinjin' },
    { name: 'Instagram', url: 'https://www.instagram.com/yagijimjim' },
    { name: 'RSS', url: 'https://zuruzurura.men/rss.xml' },
  ]

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
