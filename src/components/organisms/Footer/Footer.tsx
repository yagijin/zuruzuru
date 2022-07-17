import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './Footer.module.scss'
import GoogleFonts from '@/atoms/GoogleFonts'

const Footer = () => {
  return (
    <>
      <GoogleFonts />
      <footer className={styles.footer}>
        <hr />
        <Link to="/privacy">Privacy Policy</Link>
        <p>© 2019-{new Date().getFullYear()} yagijin, All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default Footer
