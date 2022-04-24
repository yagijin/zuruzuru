/* default packages */
import * as React from 'react'
import * as styles from './Card.module.scss'
import { Link } from 'gatsby'

type Props = {
  children: React.ReactNode
  link: string
}

const Card = ({ link, children }: Props) => {
  return link.match(/^http/g) ? (
    <Link to={link} className={styles.link}>
      <div className={styles.card}>{children}</div>
    </Link>
  ) : (
    <a href={link} className={styles.link}>
      <div className={styles.card}>{children}</div>
    </a>
  )
}

export default Card
