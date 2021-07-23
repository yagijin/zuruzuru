import * as React from "react";
import { Link } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <main>
        <Header title="Privacy Policy" link="/" />
        <title>PrivacyPolicy</title>
        <p>
          本サイトでは、アクセスデータの分析と解析のためにGoogleAnalyticsを使用しています。
          その際に、Googleがお使いのブラウザ上にCookieを設定したり既存のCookieの読み取りを行う場合があります。
          また、本サイトをご利用中のブラウザは、Googleに特定の非個人情報を自動的に送信します。
          当サイトはそれらの情報を、サイトの質の向上のために利用する可能性があります。
          本サイトのユーザは本サイトを利用することにより、上記方法および目的においてGoogleとサイト管理者が行うこのようなデータ処理に対して、許可を与えたものとみなします。
          Google社によるアクセス情報の収集方法および利用方法については、GoogleAnalyticsサービス利用規約およびGoogle社プライバシーポリシーによって定められています。
          なお、ユーザはブラウザの設定によりCookieの受け取りを拒否することができます。
        </p>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
