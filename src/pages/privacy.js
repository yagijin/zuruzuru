/* default packages */
import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

/* components */
import Title from "../components/Title";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet title="PrivacyPolicy" defer={false} />
      <main className="privacy-main">
        <div>
          <Title title="PrivacyPolicy" emoji="🔒" />
          <Link to="/">＞Topへ戻る</Link>
        </div>
        <p>
          本サイトでは、アクセスデータの分析と解析のためにGoogleAnalyticsを使用しています。
        </p>
        <p>
          その際に、Googleがお使いのブラウザ上にCookieを設定したり既存のCookieの読み取りを行う場合があります。
          また、本サイトをご利用中のブラウザは、Googleに特定の非個人情報を自動的に送信します。
          当サイトはそれらの情報を、サイトの質の向上のために利用する可能性があります。
        </p>
        <p>
          本サイトのユーザは本サイトを利用することにより、上記方法および目的においてGoogleとサイト管理者が行うこのようなデータ処理に対して、許可を与えたものとみなします。
        </p>
        <p>
          Google社によるアクセス情報の収集方法および利用方法については、
          <a href="https://marketingplatform.google.com/about/analytics/terms/jp/">
            GoogleAnalyticsサービス利用規約
          </a>
          および
          <a href="https://policies.google.com/privacy">
            Google社プライバシーポリシー
          </a>
          によって定められています。
          なお、ユーザはブラウザの設定によりCookieの受け取りを拒否することができます。
        </p>
        <p>
          また、本サイトで使用しているAmazonリンクには一部Amazonアソシエイトリンクを使用しています。
        </p>
        <hr />
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
