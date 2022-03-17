import * as React from 'react'
import * as styles from '../styles/pages/404.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OGP from '../components/OGP'
import { Helmet } from 'react-helmet'

const NotFoundPage = () => {
  return (
    <>
      <Helmet title="404 - zuruzuru" defer={false} />
      <OGP
        info={{
          title: '404 - zuruzuru',
          type: 'website',
          description: '404 page of zuruzuru',
          url: '/404',
        }}
      />
      <div className="page-wrapper">
        <Header title="Not found" link="./" />
        <main className={styles.notfound}>
          <title>Not found</title>
          <h1>Page Not Found</h1>
          <p>お探しのページは見つかりませんでした。</p>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default NotFoundPage
