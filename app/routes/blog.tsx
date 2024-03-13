import { MetaFunction, json } from "@remix-run/node"
import { Link, useLoaderData } from '@remix-run/react'
import getFeed from "app/utils/getFeed"

export const meta: MetaFunction = () => {
  return [
    { title: "zuruzuru blog" },
    { name: "description", content: "blog" },
  ];
};

export const loader = async () => {
  const noteFeeds = await getFeed('note')
  const zennFeeds = await getFeed('zenn')

  return json({ note: noteFeeds, zenn: zennFeeds});
};

export default function Blog() {
  const { note, zenn } = useLoaderData<typeof loader>()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>zuruzuru blog🍜</h1>
      <h2>note</h2>
      <ul>
        {note.feeds.slice(0,4).map((feed, index) => (
          <li key={index}>
            <Link to={feed.link ?? ""}>{feed.title}</Link>
          </li>
        ))}
      </ul>
      <h2>zenn</h2>
      <ul>
        {zenn.feeds.slice(0,4).map((feed, index) => (
          <li key={index}>
            <Link to={feed.link ?? ""}>{feed.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
