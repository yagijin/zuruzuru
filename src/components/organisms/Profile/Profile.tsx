import * as React from 'react'
import * as styles from './Profile.module.scss'
import SNS from '@/atoms/SNS'

const Profile = () => {
  return (
    <>
      <div className={styles.profile}>
        <img src="./profile.jpeg" alt="profile" />
        <div>
          <h1>yagijin</h1>
          <p>よく登呂遺跡に出没します</p>
        </div>
      </div>
      <table className={styles.career}>
        <tbody>
          <tr>
            <td>現在</td>
            <td>Webエンジニア</td>
          </tr>
          <tr>
            <td>2021</td>
            <td style={{ display: 'flex', flexWrap: 'wrap' }}>
              <span>名城大学大学院</span>
              <span>理工学研究科情報工学専攻</span>
            </td>
          </tr>
          <tr>
            <td>2019</td>
            <td>名城大学 理工学部情報工学科</td>
          </tr>
        </tbody>
      </table>
      <SNS
        snsList={[
          { name: 'Github', url: 'https://github.com/yagijin' },
          { name: 'Twitter', url: 'https://twitter.com/yagijinjin' },
          { name: 'Instagram', url: 'https://www.instagram.com/yagijimjim' },
          { name: 'RSS', url: 'https://zuruzurura.men/rss.xml' },
        ]}
      />
      {/*<p className="profile-likes">🏕🚲🍜🏸🏐🧙☖♞⚆🎴🎲🎲</p>*/}
    </>
  )
}

export default Profile
