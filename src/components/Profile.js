import * as React from "react";
import SNS from "./SNS";

const Profile = () => {
  return (
    <>
      <div className="profile-main">
        <img src="./profile.jpeg" />
        <div>
          <h1>yagijin</h1>
          <p>よく登呂遺跡に出没します</p>
        </div>
      </div>

      <table className="profile-career">
        <tbody>
          <tr>
            <td>現在</td>
            <td>Webエンジニア</td>
          </tr>
          <tr>
            <td>2021</td>
            <td>名城大学大学院 理工学研究科情報工学専攻</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>名城大学 理工学部情報工学科</td>
          </tr>
        </tbody>
      </table>
      <p className="profile-likes">🏕　🚲　🍜　🏸　🏐　🧙　☖　♞　⚆　🎴　🎲🎲</p>
      <SNS />
    </>
  );
};

export default Profile;
