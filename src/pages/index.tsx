/* default packages */
import * as React from 'react'
import * as styles from '../styles/pages/index.module.scss'
import { Helmet } from 'react-helmet'

/* components */
import RecentBlogs from '../components/RecentBlogs'
import Profile from '../components/Profile'
import Marquee from '../components/Marquee'
import Footer from '../components/Footer'
import Reading from '../components/Reading'
import OGP from '../components/OGP'
import OtherContents from '../components/OtherContents'

const IndexPage = () => {
  return (
    <>
      <Helmet title="zuruzuru" defer={false} />
      <OGP
        info={{
          title: 'Top - zuruzuru',
          type: 'website',
          description: 'yagijinのサイト',
          url: '',
        }}
      />
      <main className={styles.index}>
        <Marquee />
        <Profile />
        <Reading />
        <RecentBlogs />
        <OtherContents />
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
