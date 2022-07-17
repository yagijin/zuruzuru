import * as React from 'react'
import * as styles from './PageLayout.module.scss'
import Header from '../../Header'
import Footer from '../../Footer'
import Head from '../../Head'

type Props = {
  children: React.ReactNode
  head: {
    title: string
    type: string
    description: string
    url: string
  }
  filename?: string
  hasHeader?: boolean
  hasFooter?: boolean
}

const PageLayout: React.FC<Props> = ({
  children,
  head,
  filename,
  hasHeader = true,
  hasFooter = true,
}) => {
  return (
    <>
      <Head info={head} filename={filename} />
      <div className="page-wrapper">
        {hasHeader && <Header title={head.title} link="./" />}
        <main className={styles.main}>{children}</main>
        {hasFooter && <Footer />}
      </div>
    </>
  )
}

export default PageLayout
