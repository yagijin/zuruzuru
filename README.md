# zuruzurura.men

https://zuruzurura.men

## commands

```shell
# start development server
npm run develop

# build from src
npm run build

# make new blog from template
npm run blog

# update ogp
npm run ogp
```

## コンポーネントの粒度

名前はatomicdesignっぽくなっているが実際は独自の分類をしている。
### Atoms
ボタンやカードなど単純な粒度のもの。データやロジックは入れてはいけない。

### Organisms

Atomsより大きいコンポーネントの単位。
個人ブログなのでデータやロジックを上位のコンポーネントには積極的に切り出さずorganismsに入れることもある。

### Layouts

ページレイアウトの粒度のコンポーネントを入れる。

### その他

個人ブログなので省力化のためPagesの粒度のコンポーネントはcomponentsに作らず、Gatsbyのルーティングのためのpagesのコンポーネントにそのまま記述する。
markdownからデータを取る場合は基本的にここで取得する。

## MDX内で使用できる独自コンポーネント

### GoogleMap

props

```
//iframeに埋め込む用のURLを渡す
url : string
```

### GoogleFonts

props なし  
google effect が import できる

### Twitter

props

```jsx
<blockquote class="twitter-tweet">
  <p lang="und" dir="ltr">
    <a href="https://t.co/W976clLDzR">pic.twitter.com/W976clLDzR</a>
  </p>
  &mdash; やぎじん (@yagijinjin) <a href="https://twitter.com/yagijinjin/status/1434377889835741186?ref_src=twsrc%5Etfw">September 5, 2021</a>
</blockquote>
```

## reference

[gatsby-plugin-mdx](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx)　
[Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)　
[Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)　
[Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)　
[API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)　
[Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)　
[Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
