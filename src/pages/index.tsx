/* default packages */
import * as React from 'react'
import * as styles from '../styles/pages/index.module.scss'

/* components */
import RecentBlogs from '../components/RecentBlogs'
import Profile from '../components/Profile'
import Marquee from '../components/Marquee'
import Footer from '../components/Footer'
import Reading from '../components/Reading'
import Head from '../components/Head'
import OtherContents from '../components/OtherContents'
import Todo from '../components/Todo'

const IndexPage = () => {
  return (
    <>
      <Head
        info={{
          title: 'Top',
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
          <Todo />
          <OtherContents />
          <Marquee />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default IndexPage
