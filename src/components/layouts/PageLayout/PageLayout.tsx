import * as React from 'react'
import * as styles from './PageLayout.module.scss'
import Header from '@/organisms/Header'
import Footer from '@/organisms/Footer'
import Head from '@/organisms/Head'

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
  wrapperClassName?: string
}

const PageLayout: React.FC<Props> = ({
  children,
  head,
  filename,
  wrapperClassName = 'page-wrapper-60',
  hasHeader = true,
  hasFooter = true,
}) => {
  return (
    <>
      <Head info={head} filename={filename} />
      <div className={wrapperClassName}>
        {hasHeader && <Header title={head.title} link="./" />}
        <main className={styles.main}>{children}</main>
        {hasFooter && <Footer />}
      </div>
    </>
  )
}

export default PageLayout
