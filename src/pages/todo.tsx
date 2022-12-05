/* default packages */
import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as styles from '@/styles/pages/todo.module.scss'
import PageLayout from '@/layouts/PageLayout'
import TodoCards, { props } from '@/atoms/TodoCards'

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
    <PageLayout
      head={{
        title: 'やりたいこと',
        type: 'website',
        description: 'やりたいこと一覧',
        url: '/todo',
      }}
      wrapperClassName="page-wrapper-80"
    >
      <div className={styles['main']}>
        <p>
          イベントや場所で一緒に行く人がいなかったり、あたらしく一緒に行く人を探したいものたちのリスト。話したことない人でもどうぞ。
        </p>
        <TodoCards
          todos={todos.allMdx.nodes.map((todo: todo) => todo.frontmatter) ?? []}
        />
        <h3 className={styles['title']}>行きたいお店マップ</h3>
        <p>近日追加</p>
      </div>
    </PageLayout>
  )
}

export default Todo
