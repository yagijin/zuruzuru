import * as React from 'react'
import * as styles from './TodoCards.module.scss'
import dayjs from 'dayjs'

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
  const now = dayjs()
  const items = todos.filter((todo: todo['frontmatter']) => {
    console.log(todo.title)
    return dayjs(todo.date).isAfter(now)
  })
  const createTweetParams = (title: string) => {
    return {
      text: `@yagijinjin \n「${title}」を一緒にやりましょう✋\n`,
      url: 'https://zuruzurura.men/todo',
    }
  }
  const tweetUrl = new URL('https://twitter.com/intent/tweet')

  return (
    <div className={styles['container']}>
      {items
        .filter((todo) => !todo.done)
        .map((todo) => {
          tweetUrl.search = new URLSearchParams(
            createTweetParams(todo.title)
          ).toString()
          return (
            <div key={todo.title} className={styles['card']}>
              <p className={styles['title']}>{todo.title}</p>
              <hr />
              <p className={styles['limit']}>
                {`期限：${dayjs(todo.date).format(`YYYY-MM-DD`)}`}
              </p>
              {!!todo?.url && (
                <a href={todo.url}>
                  関連リンク<span style={{ fontSize: 'small' }}>🔗</span>
                </a>
              )}
              <article>{todo.description}</article>
              <a href={tweetUrl.toString()} className={styles['invite']}>
                <span style={{ fontSize: 'small' }}>👉 </span>誘ってみる
              </a>
            </div>
          )
        })}
    </div>
  )
}

export default TodoCards
