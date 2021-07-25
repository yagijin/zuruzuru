import * as React from "react";
import RecentBlogs from "../components/RecentBlogs";
import Preparing from "../components/Preparing";
import Profile from "../components/Profile";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import Title from "../components/Title";

const IndexPage = () => {
  return (
    <>
      <main className="index-main">
        <title>Home</title>
        <Marquee />
        <Profile />
        <RecentBlogs />
        <Title title="その他コンテンツ" emoji="" />
        <div className="index-preparing">
          <Preparing />
        </div>
        <hr />
      </main>

      <Footer />
    </>
  );
};

export default IndexPage;
