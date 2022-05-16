import * as React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import * as styles from './Todo.module.scss'

/* components */
import Title from '../Title'
import TodoCard from '../TodoCard'
import { props } from '../TodoCard/TodoCard'

type todo = { frontmatter: props['todos'][0] }

const Todo = () => {
  const todos = useStaticQuery(graphql`
    query TodoQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: ASC }
        filter: {
          fileAbsolutePath: { regex: "/todos/" }
          frontmatter: { done: { eq: false } }
        }
        limit: 3
      ) {
        nodes {
          frontmatter {
            date
            title
            url
            description
            done
          }
        }
      }
    }
  `)

  return (
    <>
      <Title title="やりたいこと" emoji="✈️" />
      <TodoCard
        todos={todos.allMdx.nodes.map((todo: todo) => todo.frontmatter) ?? []}
      />
      <Link to="/todo" className={styles['more']}>
        {' もっと見る'}
      </Link>
    </>
  )
}

export default Todo
