import * as React from 'react'
import * as styles from '../styles/pages/404.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from '../components/Head'

const InternalServerErrorPage = () => {
  return (
    <>
      <Head
        info={{
          title: '500',
          type: 'website',
          description: '500 page of zuruzuru',
          url: '/500',
        }}
      />
      <div className="page-wrapper">
        <Header title="ErrorCode 500" link="./" />
        <main className={styles.notfound}>
          <title>Internal Server Error</title>
          <h1>⚠️ Internal Server Error</h1>
          <p>
            サーバーで何か問題が起きています。しばらくしてからもう一度訪問してください。
          </p>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default InternalServerErrorPage
