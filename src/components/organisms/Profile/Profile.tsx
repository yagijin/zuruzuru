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
          <SNS
            snsList={[
              { name: 'Github', url: 'https://github.com/yagijin' },
              { name: 'Twitter', url: 'https://twitter.com/yagijinjin' },
              {
                name: 'Instagram',
                url: 'https://www.instagram.com/yagijimjim',
              },
              { name: 'RSS', url: 'https://zuruzurura.men/rss.xml' },
            ]}
          />
        </div>
      </div>

      {/*<p className="profile-likes">🏕🚲🍜🏸🏐🧙☖♞⚆🎴🎲🎲</p>*/}
    </>
  )
}

export default Profile
