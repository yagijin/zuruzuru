/* default packages */
import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as styles from './RecentBlogs.module.scss'

/* components */
import Title from '@/atoms/Title'
import BlogCard from '@/atoms/BlogCard'

const RecentBlogs = () => {
  const allBlogs = useStaticQuery(graphql`
    query RecentBlogsQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/blogs/" } }
        limit: 3
      ) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            url
            tags
          }
        }
      }
    }
  `)

  type node = {
    frontmatter: {
      url: string
      title: string
      description: string
      tags: string[]
    }
  }

  return (
    <>
      <Title title="Recent Blogs" emoji="🗒" />
      {allBlogs.allMdx.nodes.map((node: node) => {
        return (
          <>
            <BlogCard key={node.frontmatter.title} blog={node.frontmatter} />
            <hr />
          </>
        )
      })}
      <Link to="/blogs" className={styles.link}>
        もっと見る
      </Link>
    </>
  )
}

export default RecentBlogs