import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
      <Title title="Reading" emoji="📕" />
      {latestBook.allMdx.nodes[0] && (
        <>
          <a href={latestBook.allMdx.nodes[0].frontmatter.url}>
            {latestBook.allMdx.nodes[0].frontmatter.title}
          </a>
        </>
      )}
    </div>
  )
}

export default Reading
