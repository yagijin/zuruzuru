/* default packages */
import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

/* components */
import Title from '../Title'
import BlogCard from '../BlogCard'

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

  return (
    <div>
      <Title title="Recent Blogs" emoji="🗒" />
      {allBlogs.allMdx.nodes.map((node) => {
        return <BlogCard key={node.frontmatter.title} blog={node} />
      })}
      <Link to="/blogs" className="not-default">
        Show All
      </Link>
    </div>
  )
}

export default RecentBlogs
