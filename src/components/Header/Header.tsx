import * as React from 'react'
import * as styles from './Header.module.scss'
import { Link } from 'gatsby'

type Props = {
  title: string
  link: string
}

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <Link to={props.link} className={`${styles.title} not-default`}>
        <h1>
          <span className={styles.name}>{props.title}🍜</span>
          <span className={styles.zuruzuru}>&lt; ズルズル </span>
        </h1>
      </Link>
      <Link to="/" className="not-default">
        <p>＞Topへ</p>
      </Link>
    </header>
  )
}

export default Header
