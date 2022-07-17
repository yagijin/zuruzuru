import * as React from 'react'
import * as styles from './PageLayout.module.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from '@/components/Head'

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

const PageLayout = ({
  children,
  head,
  filename,
  hasHeader = true,
  hasFooter = true,
}: Props) => {
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
