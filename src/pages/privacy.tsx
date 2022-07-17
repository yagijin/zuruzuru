import * as React from 'react'
import * as styles from '@/styles/pages/privacy.module.scss'
import PageLayout from '@/layouts/PageLayout'

const PrivacyPolicy = () => {
  return (
    <PageLayout
      head={{
        title: 'Privacy Policy',
        type: 'website',
        description: 'privacy policy of zuruzuru',
        url: '/privacy',
      }}
      wrapperClassName="page-wrapper-80"
    >
      <div className={styles.privacy}>
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
          また、本サイトで使用しているAmazonリンクにはAmazonアソシエイトリンクを使用している場合があります。
        </p>
      </div>
    </PageLayout>
  )
}

export default PrivacyPolicy
