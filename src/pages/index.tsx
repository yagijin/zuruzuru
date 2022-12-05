/* default packages */
import * as React from 'react'
import * as styles from '@/styles/pages/index.module.scss'

/* components */
import PageLayout from '@/layouts/PageLayout'
import RecentBlogs from '@/organisms/RecentBlogs'
import Profile from '@/organisms/Profile'
import Marquee from '@/tags/Marquee'
import Reading from '@/organisms/Reading'
import OtherContents from '@/organisms/OtherContents'
import Todo from '@/organisms/Todo'

const IndexPage = () => {
  return (
    <PageLayout
      head={{
        title: 'Top',
        type: 'website',
        description: 'yagijinのサイト',
        url: '',
      }}
      hasHeader={false}
    >
      <div className={styles.index}>
        <Profile />
        <RecentBlogs />
        <Todo />
        <OtherContents />
        <Marquee />
      </div>
    </PageLayout>
  )
}

export default IndexPage
