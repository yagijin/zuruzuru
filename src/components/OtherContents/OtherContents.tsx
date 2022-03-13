import * as React from 'react'
import * as styles from './OtherContents.module.scss'
import Card from '../Card'
import Title from '../Title'

const OtherContents = () => {
  return (
    <>
      <Title title="その他コンテンツ" emoji="" />
      <ul className={styles.contents}>
        <li>
          <Card link="/console" sameSite={true}>
            <div>
              <img
                src="./ogp/ogp_console.png"
                alt="consoleのスクリーンショット"
              />
              <p>Console Style Profile</p>
            </div>
          </Card>
        </li>
        <li>
          <Card
            link="https://chrome.google.com/webstore/detail/rubydocument-template/bnhpmjnifppbemfkmfpgadhfaemgkoia"
            sameSite={false}
          >
            <div>
              <img
                src="./chrome-extension-ruby.png"
                alt="chrome拡張のスクリーンショット"
              />
              <p>Chrome Extension</p>
            </div>
          </Card>
        </li>
      </ul>
    </>
  )
}

export default OtherContents
