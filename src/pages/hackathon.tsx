/* default packages */
import * as React from 'react'
import * as styles from '../styles/pages/hackathon.module.scss'
import { Helmet } from 'react-helmet'

/* components */
import Footer from '../components/Footer'
import OGP from '../components/OGP'
import Header from '../components/Header'

const items = [
  {
    name: '名古屋市到達難易度MAP',
    link: 'https://nagoya-geohack2020.yagijin.com/',
    image: './hackathons/geohack.png',
    description:
      '名古屋市内の到達難易度が一目でわかるマップ。総務省主催のGeospatial Hackers Program 2020にて作成し、東海大会優勝。フロントエンドを担当。',
  },
  {
    name: 'MouseHat',
    link: 'https://github.com/jphacks/NG_1904',
    image: './hackathons/mousehat.png',
    description:
      '口癖を直すのを手伝ってくれるWebアプリ。JP Hacks 2019にて作成、企業賞を3つ受賞し、Innovator認定を受けました。',
  },
  {
    name: 'eBookmark',
    link: 'https://github.com/KaiseiYokoyama/eBookmark-Standard',
    image: './hackathons/e-Bookmark.png',
    description:
      'OLEDとNFCで構成される次世代のしおり。KMハッカソンにて作成し、審査員特別賞受賞。主にデバイス側の処理を担当。',
  },
  {
    name: 'MiniMom',
    link: 'https://github.com/yagijin/MiniMom',
    image: './hackathons/minimom.png',
    description:
      '片付けを習慣づけるお手伝いをしてくれるIoT棚。OthloHack 2019にて作成し、Cookpad賞を受賞。サーバサイドを担当',
  },
  {
    name: 'お母さん検出装置',
    link: 'https://github.com/yagijin/hack_u2019nagoya',
    image: './hackathons/hacku.png',
    description:
      '任意の相手がWifiにつないだ時に検知して通知してくれるサービス。Hack U 2019 Nagoyaにて作成し、Happy Hacking賞受賞。Androidアプリを担当。',
  },
  {
    name: '洗濯日和',
    image: './hackathons/stick.jpg',
    description:
      'IoT物干し竿。太陽の方角を自動で向き、雨が降るとき自動で取り込むためはやく乾燥ができる。HackU2019Meijoにて作成。サーバサイドを担当。',
  },
]

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet title="Hackathon - zuruzuru" defer={false} />
      <OGP
        info={{
          title: 'Hackathon - zuruzuru',
          type: 'website',
          description: '今までhackathonで作ったものたち',
          url: '/hackathon',
        }}
      />
      <div className={styles['main']}>
        <Header title="Hackathons" link="./" />
        <p>ハッカソンなどのイベントに参加して作成してきたものたち</p>
        <main>
          {items.map((item) => {
            return (
              <div className={styles['card']} key={item.name}>
                <div>
                  <img src={item.image} alt={`${item.name}のサムネイル`} />
                </div>
                <p>{item.name}</p>
                <article>{item.description}</article>
                {item?.link && (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    👉 Link
                  </a>
                )}
              </div>
            )
          })}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default PrivacyPolicy
