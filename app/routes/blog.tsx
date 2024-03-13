import { MetaFunction, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import getFeed from 'app/utils/getFeed'
import Ramen from '~/components/Ramen'

export const meta: MetaFunction = () => {
  return [{ title: 'zuruzuru blog' }, { name: 'description', content: 'blog' }]
}

export const loader = async () => {
  const noteFeeds = await getFeed('note')
  const zennFeeds = await getFeed('zenn')

  return json({ note: noteFeeds, zenn: zennFeeds })
}

export default function Blog() {
  const { note, zenn } = useLoaderData<typeof loader>()
  return (
    <>
      <h1>
        <span className="highlightBackground">Zuruzuru blog</span>
        <Ramen />
      </h1>
      <Title title="note" link={note.url} />
      <ul>
        {note.feeds.slice(0, 4).map((feed, index) => (
          <li key={index}>
            <Link to={feed.link ?? ''}>{feed.title}</Link>
          </li>
        ))}
      </ul>
      <Title title="Zenn" link={zenn.url} />
      <ul>
        {zenn.feeds.slice(0, 4).map((feed, index) => (
          <li key={index}>
            <Link to={feed.link ?? ''}>{feed.title}</Link>
          </li>
        ))}
      </ul>
      <h2>Pepabo Tech Potal</h2>
      <ul>
        <li>
          <Link to="https://tech.pepabo.com/authors/yagijin/">
            https://tech.pepabo.com/authors/yagijin/
          </Link>
        </li>
      </ul>
    </>
  )
}

const Title = ({ title, link }: { title: string; link: string }) => {
  return (
    <h2>
      <Link to={link} className="unstyledLink">
        {title}
      </Link>
    </h2>
  )
}
