import Parser, { Output } from 'rss-parser'

type FeedKey = 'note' | 'zuruzuru' | 'zenn'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RSSOutput = Output<{ [key: string]: any }>

export type Feed = RSSOutput['items'][0]
export type Feeds = (Feed & { type: FeedKey })[]

type FeedWithURL = {
  url: string
  feeds: Feeds
}

type FeedData = {
  [key in FeedKey]: FeedWithURL
}

const data: FeedData = {
  note: {
    url: 'https://note.com/yagijin/rss',
    feeds: [],
  },
  zuruzuru: {
    url: 'https://zuruzurura.men/rss.xml',
    feeds: [],
  },
  zenn: {
    url: 'https://zenn.dev/yagijin/feed',
    feeds: [],
  },
}

export default async function getFeed(feed: FeedKey): Promise<FeedWithURL> {
  const parser = new Parser({
    customFields: {
      // noteにはenclosureがないので代わりに設定する
      item: ['media:thumbnail'],
    },
  })
  await parser.parseURL(data[feed].url).then((target) => {
    data[feed].feeds = target.items.map((item) => {
      return { ...item, type: feed }
    })
    return target.items
  })
  return data[feed]
}
