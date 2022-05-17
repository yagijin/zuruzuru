---
title: ここ最近学んだTypescriptのtips
date: 2022-02-10T00:12:30+09:00
description: ここ最近学んだTypescriptのtipsのメモ
url: /blog/2022-02-09-ここ最近学んだtypescriptのtips/
tags:
  - Typescript
  - React
---

ここ最近学んだTypeScriptのtipsのメモ

## 子プロパティだけを取り出したい


プロパティへのアクセス方法でひっかかった。

```typescript
type test = {
  child: {
    grandchild: string;
  }
}

// こういうアクセスができると思ってたけどできない
const example1: test.child = {
  grandchild: "example"
}

// これはできる
const example2: test["child"] = {
  grandchild: "example"
}
```

## すべてのプロパティをオプショナルにする

型を再帰的に扱うことでオブジェクトのすべてのプロパティをオプショナルにすることができる。
自動生成された型をモックサーバなどで汎用的に使いときなどに便利だった。

```typescript
// これで良さそうだと思ったら Array のときにその内部ではなく Array 自体がオプショナルになって失敗するので、
type OptionalProperties<T> = {
  [U in keyof T]?: T[U] | OptionalProperties<T[U]>
}

// こうするとうまくいく。まえにしらべて stackoverflow のどこかで見かけた。
type OptionalProperties<T> = {
  [U in keyof T]?: T[U] extends Array<infer V>
    ? Array<OptionalProperties<V>>
    : OptionalProperties<T[U]>
}
```

 オプショナルにしたいオブジェクトの階層が1階層のみで良いなら、UtilityTypesのPartialを使うともっと簡単にできる
 - https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype

## js に ts の lint が効いちゃう問題

.eslintrc.jsonをtypescriptのデフォルトの設定のまま使ってるとjavascriptにtypescriptのlintが効いてしまう。
jsの設定をデフォルトにして、tsの場合だけ適宜設定をoverrideしたら別々でlintが効いていい感じ。

```typescript
{
  ...
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": ["plugin:@typescript-eslint/recommended"],
      "rules": {
        ...
      }
    }
  ]
}
```

## Reactのchildrenにpropsを追加する

親コンポーネントから受け取ったchildrenに新しいpropsを追加して子コンポーネントにchildrenとして渡したい場合、cloneElementを使ってchildrenにpropsを追加したい。

```typescript
const newChildren = React.cloneElement(children, properties);
```

ただ、cloneElementのchildrenの部分にはReactElementしか渡せないが、ReactChildにはReactTextとしてstringとnumberが許容されている。

```typescript
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
type ReactChild = ReactElement | ReactText;
type ReactText = string | number;
```

なのでこれをバリデーションしたい。
そのときにReactにはReactElementの検証用にisValidElementが用意されていて便利だった。

- https://ja.reactjs.org/docs/react-api.html#isvalidelement


## double assertion って名前がついてた

本を読んで名前を知ったシリーズ。
やってはいけない例のこれdouble assertionというらしい。

```typescript
const example = 1 as any as string
```

## Object.freeze()でも read only にできる

使ったことないけど本に書いてあってへ〜となった。
tsのreadonlyと違って、jsの機能なのでトランスパイル後である実行時も残るという違いらしい。

- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
