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

const BlogCard = (props: Props) => {
  return (
    <div className={styles.card}>
      <h3>
        <Link to={props.blog.frontmatter.url}>
          {props.blog.frontmatter.title}
        </Link>
      </h3>
      <Tags tags={props.blog.frontmatter.tags} />
      <p>{props.blog.frontmatter.description}</p>
      <hr />
    </div>
  )
}

export default BlogCard
