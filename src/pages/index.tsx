/* default packages */
import * as React from 'react'
import * as styles from '../styles/pages/index.module.scss'
import { Helmet } from 'react-helmet'

/* components */
import RecentBlogs from '../components/RecentBlogs'
import Profile from '../components/Profile'
import Marquee from '../components/Marquee'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Reading from '../components/Reading'
import OGP from '../components/OGP'
import Card from '../components/Card'

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
        <Title title="その他コンテンツ" emoji="" />
        <Card>
          <div>
            <img
              src="./ogp/ogp_console.png"
              alt="consoleのスクリーンショット"
            />
            <p>Console Style Profile</p>
          </div>
        </Card>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
