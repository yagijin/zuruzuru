---
title: lolipopマネージドクラウドにrailsAPIモードでgraphqlAPIを用意する
date: 2022-04-21T22:28:42+09:00
description: lolipopマネージドクラウドでrails7のAPIモードでgraphql gemを使用して、graphqlAPIを用意します。
url: /blog/2022-04-21-lolipopマネージドクラウドにrailsapiモードでgraphqlapiを用意する/
tags:
- Rails
- Graphql
- Lolipop
---	

lolipopマネージドクラウドでrails7のAPIモードでgraphql gemを使用して、graphqlAPIを用意します。

最終的にできた環境が[これ](https://github.com/yagijin/rails_server)です。

lilipopマネージドクラウドでのコントロールパネルの設定については触れないので、事前に https://note.com/mclolipopjp/n/n624c9c20853b を参考に環境変数などの設定をいい感じにしておきます。
rubyのバージョンについては、僕のマネージドクラウドの環境では2.7.3だったんですが、新しいものに変わったりするらしいので`ruby "~> 2.7.3"`みたいな感じでGemfile書いておくと無難そうでした。

## RailsをAPIモードで始める

viewはいらないので、RailsをAPIモードで始めます。
APIモードがどんなモードでどういったメリットがあるかは、RailsGuideの説明がわかりやすくてよかったのでリンクを貼っておきます。
- https://railsguides.jp/api_app.html

```shell
rails new app_name --api
```

## GraphQLを導入する

GraphQLとついでにGraphiQLも使用するのでGemfileに以下を追記します。

```ruby
gem 'graphql'
# 以下２つはgraphiqlで使う
gem 'graphiql-rails'
gem 'sass-rails'
```
[readme](https://github.com/rmosolgo/graphiql-rails#note-on-api-mode)にしたがってGraphiQLの設定を進めていきます。
まず、GraphiQLのpathをroute.rbに追加してアクセスできるようにします。僕の場合、サービスを作るのではなくて勉強に使うのでproductionでも読み込むようにしました。

```ruby
if Rails.env.development? || Rails.env.production?
	mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
end
```

sass-rails + Sprockets4をうまく動かすのに追加で設定がいるらしいです。app/assets/config/manifest.jsに以下を追記しました。

```js
//= link graphiql/rails/application.css
//= link graphiql/rails/application.js
```

また、APIモードではデフォルトでオフになっているcookieのミドルウェアの設定をconfig/applocation.rbに記述しないと動きませんでした。

```ruby
config.middleware.use ActionDispatch::Cookies
config.middleware.use ActionDispatch::Session::CookieStore
```

## デプロイを自動化する
デプロイは、[このブログ](https://diary.shu-cream.net/GitHub%20ActionsでRailsアプリをロリポップマネージドクラウドにデプロイする)を参考にほぼコピペすることで自動化することができました。GitHub Actionを使っており、GitHub上のリモートリポジトリにpushされ次第、ロリポップマネージドクラウドへ自動デプロイされます。

ymlの内容はすこしだけいじっていて、すでにロリポップマネージドクラウドに上がっているgitリポジトリのデフォルトブランチがmasterだったのに対して、開発している環境ではmainだったので以下のようにrenameして毎回デプロイしています。

```yml
	- name: git rename
		run: git branch -m main master
	- name: deploy
		run: git push -f lolipop master
```

ただ、よくよく考えると直接sshしてデフォルトブランチをrenameすれば済むので、なんでこんなことしたんだろう過去の自分。


## まとめ
いつでも壊して遊びながらrailsとgraphqlを学ぶ環境ができた。
