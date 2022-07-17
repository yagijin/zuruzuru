import * as React from 'react'
import * as styles from './TodoCards.module.scss'
import moment from 'moment'

export type props = {
  todos:
    | {
        title: string
        description: string
        url?: string
        date: string
        done: boolean
      }[]
}

const TodoCards = ({ todos }: props) => {
  return (
    <div className={styles['container']}>
      {todos
        .filter((todo) => !todo.done)
        .map((todo) => {
          const params = {
            text: `@yagijinjin \n「${todo.title}」を一緒にやりましょう✋\n`,
            url: 'https://zuruzurura.men/todo',
          }
          const url = new URL('https://twitter.com/intent/tweet')
          url.search = new URLSearchParams(params).toString()
          return (
            <div key={todo.title} className={styles['card']}>
              <p className={styles['title']}>{todo.title}</p>
              <hr />
              <p className={styles['limit']}>
                {`期限：${moment(todo.date).local().format(`YYYY-MM-DD`)}`}
              </p>
              {!!todo?.url && (
                <a href={todo.url}>
                  関連リンク<span style={{ fontSize: 'small' }}>🔗</span>
                </a>
              )}
              <article>{todo.description}</article>
              <a href={url.toString()} className={styles['invite']}>
                <span style={{ fontSize: 'small' }}>👉 </span>誘ってみる
              </a>
            </div>
          )
        })}
    </div>
  )
}

export default TodoCards
