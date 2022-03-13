/* default packages */
import * as React from 'react'
import * as styles from './BlogCard.module.scss'
import { Link } from 'gatsby'

/* components */
import Tags from '../Tags'

type Props = {
  blog: {
    frontmatter: {
      url: string
      title: string
      tags: string[]
      description: string
    }
  }
}

const BlogCard = ({ blog }: Props) => {
  return (
    <div className={styles.card}>
      <h3>
        <Link to={blog.frontmatter.url}>{blog.frontmatter.title}</Link>
      </h3>
      <Tags tags={blog.frontmatter.tags} />
      <p>{blog.frontmatter.description}</p>
      {/* Todo：最後の要素ではhrを非表示にしたい */}
      <hr />
    </div>
  )
}

export default BlogCard
