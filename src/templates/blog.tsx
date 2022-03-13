/* default packages */
import React from 'react'
import * as styles from './blog.module.scss'
import { MDXProvider } from '@mdx-js/react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

/* components */
import Footer from '../components/Footer'
import Header from '../components/Header'
import Tags from '../components/Tags'
import OGP from '../components/OGP'
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

export default function Blog({ data: { mdx } }: Props) {
  return (
    <>
      <OGP
        info={{
          title: mdx.frontmatter.title,
          type: 'article',
          description: mdx.frontmatter.description,
          url: mdx.frontmatter.url,
        }}
        filename={`ogp_${mdx.frontmatter.title.toLocaleLowerCase()}.png`}
      />
      <main className={styles.blog}>
        <Header link="/blogs" title="Blog" />
        <p className={styles.date}>{mdx.frontmatter.date}</p>
        <h1 className={styles.title}>{mdx.frontmatter.title}</h1>
        <Tags tags={mdx.frontmatter.tags} />
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </main>
      <Footer />
    </>
  )
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