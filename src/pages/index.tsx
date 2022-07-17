/* default packages */
import * as React from 'react'
import * as styles from '@/styles/pages/index.module.scss'

/* components */
import PageLayout from '@/layouts/PageLayout'
import RecentBlogs from '../components/RecentBlogs'
import Profile from '../components/Profile'
import Marquee from '../components/Marquee'
import Reading from '../components/Reading'
import OtherContents from '../components/OtherContents'
import Todo from '../components/Todo'

const IndexPage = () => {
  return (
    <PageLayout
      head={{
        title: 'Top',
        type: 'website',
        description: 'yagijinのサイト',
        url: '',
      }}
    >
      <main className={styles.index}>
        <Profile />
        <Reading />
        <RecentBlogs />
        <Todo />
        <OtherContents />
        <Marquee />
      </main>
    </PageLayout>
  )
}

export default IndexPage
