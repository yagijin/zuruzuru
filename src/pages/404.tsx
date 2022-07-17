import * as React from 'react'
import * as styles from '../styles/pages/404.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from '../components/Head'

const NotFoundPage = () => {
  return (
    <>
      <Head
        info={{
          title: '404',
          type: 'website',
          description: '404 page of zuruzuru',
          url: '/404',
        }}
      />
      <div className="page-wrapper">
        <Header title="Not found" link="./" />
        <main className={styles.notfound}>
          <h1>Page Not Found</h1>
          <p>お探しのページは見つかりませんでした。</p>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default NotFoundPage
