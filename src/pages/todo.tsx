/* default packages */
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as styles from '../styles/pages/todo.module.scss'

/* components */
import Footer from '../components/Footer'
import Head from '../components/Head'
import Header from '../components/Header'
import TodoCard from '../components/TodoCard'
import { props } from '../components/TodoCard/TodoCard'

type todo = { frontmatter: props['todos'][0] }

const Todo = () => {
  const todos = useStaticQuery(graphql`
    query AllTodosQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: ASC }
        filter: {
          fileAbsolutePath: { regex: "/todos/" }
          frontmatter: { done: { eq: false } }
        }
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
      <Head
        info={{
          title: 'Todo - zuruzuru',
          type: 'website',
          description: 'やりたいこと一覧',
          url: '/todo',
        }}
      />
      <div className={styles['main']}>
        <Header title="Todos" link="./" />
        <p>
          イベントや場所で一緒に行く人がいなかったり、あたらしく一緒に行く人を探したいものたち。
          話したことない人もぜひ。
        </p>
        <TodoCard
          todos={todos.allMdx.nodes.map((todo: todo) => todo.frontmatter) ?? []}
        />
        <h3 className={styles['title']}>行きたいお店マップ</h3>
        <p>近日追加</p>
        <Footer />
      </div>
    </>
  )
}

export default Todo
