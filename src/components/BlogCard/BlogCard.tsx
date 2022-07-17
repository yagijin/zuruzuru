/* default packages */
import * as React from 'react'
import * as styles from './BlogCard.module.scss'
import { Link } from 'gatsby'

/* components */
import Tags from '../Tags'

type Props = {
  blog: {
    url: string
    title: string
    tags: string[]
    description: string
  }
}

const BlogCard = ({ blog }: Props) => {
  return (
    <div className={styles.card}>
      <h3>
        <Link to={blog.url}>{blog.title}</Link>
      </h3>
      <Tags tags={blog.tags} />
      <p>{blog.description}</p>
    </div>
  )
}

export default BlogCard
