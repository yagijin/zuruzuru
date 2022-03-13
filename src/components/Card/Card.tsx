/* default packages */
import * as React from 'react'
import * as styles from './Card.module.scss'
import { Link } from 'gatsby'

type Props = {
  children: React.ReactNode
}

const Card = (props: Props) => {
  return (
    <Link to="/console" className={styles.link}>
      <div className={styles.card}>{props.children}</div>
    </Link>
  )
}

export default Card
