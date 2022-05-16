import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as styles from './Reading.module.scss'

/* components */
import Title from '../Title'

const Reading = () => {
  const latestBook = useStaticQuery(graphql`
    query ReadingQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/books/" } }
        limit: 1
      ) {
        nodes {
          frontmatter {
            title
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <Title title="Reading" emoji="📕" />
      {latestBook.allMdx.nodes[0] && (
        <>
          <a
            href={latestBook.allMdx.nodes[0].frontmatter.url}
            className={styles['link']}
          >
            {latestBook.allMdx.nodes[0].frontmatter.title}
          </a>
        </>
      )}
    </>
  )
}

export default Reading
