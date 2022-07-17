/* default packages */
import React from 'react'
import * as styles from './blog.module.scss'
import { MDXProvider } from '@mdx-js/react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

/* components */
import PageLayout from '@/layouts/PageLayout'
import Ramen from '../components/Ramen'
import Tags from '../components/Tags'
import GoogleMap from '../components/GoogleMap'
import GoogleFonts from '../components/GoogleFonts'
import Twitter from '../components/TwitterCard'

const shortcodes = { Link, GoogleFonts, GoogleMap, Twitter }

type Props = {
  data: {
    mdx: {
      frontmatter: {
        title: string
        date: string
        url: string
        tags: string[]
        description: string
      }
      body: string
    }
  }
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`

export default function Blog({ data: { mdx } }: Props) {
  return (
    <PageLayout
      head={{
        title: mdx.frontmatter.title,
        type: 'article',
        description: mdx.frontmatter.description,
        url: mdx.frontmatter.url,
      }}
      filename={`ogp_${mdx.frontmatter.title.toLocaleLowerCase()}.png`}
      hasHeader={false}
    >
      <h2 className={styles.zuruzuru}>
        Zuruzuru Blog <Ramen />
      </h2>
      <div className={styles.menu}>
        <Link to="/blogs">👉ブログ一覧へ</Link>
        <Link to="/">👉トップページへ</Link>
      </div>
      <div className={styles.blog}>
        <p className={styles.date}>{mdx.frontmatter.date}</p>
        <h1 className={styles.title}>{mdx.frontmatter.title}</h1>
        <Tags tags={mdx.frontmatter.tags} />
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </PageLayout>
  )
}
