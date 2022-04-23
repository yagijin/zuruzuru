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
      <div className="page-wrapper">
        <main className={styles.index}>
          <Profile />
          <Reading />
          <RecentBlogs />
          <OtherContents />
          <Marquee />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default IndexPage
