import * as React from 'react'
import * as styles from '../styles/pages/404.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

const NotFoundPage = () => {
  return (
    <>
      <main className={styles.notfound}>
        <title>Not found</title>
        <Header title="Not found" link="./" />
        <h1>Page Not Found</h1>
        <p>お探しのページは見つかりませんでした。</p>
      </main>
      <Footer />
    </>
  )
}

export default NotFoundPage
