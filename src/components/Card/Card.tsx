/* default packages */
import * as React from 'react'
import * as styles from './Card.module.scss'
import { Link } from 'gatsby'

type Props = {
  children: React.ReactNode
  link: string
  sameSite: boolean
}

const Card = (props: Props) => {
  return props.sameSite ? (
    <Link to={props.link} className={styles.link}>
      <div className={styles.card}>{props.children}</div>
    </Link>
  ) : (
    <a href={props.link} className={styles.link}>
      <div className={styles.card}>{props.children}</div>
    </a>
  )
}

export default Card
