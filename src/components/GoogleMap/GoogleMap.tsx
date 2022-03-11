/* default packages */
import * as React from 'react'
import * as styles from './GoogleMap.module.scss'

type Props = {
  url: string
}

const GoogleMap = (props: Props) => {
  return (
    <div className={styles.map}>
      <iframe
        src={props.url}
        width="600"
        height="450"
        frameBorder="0"
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default GoogleMap
