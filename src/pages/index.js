/* default packages */
import * as React from "react";
import { Helmet } from "react-helmet";

/* components */
import RecentBlogs from "../components/RecentBlogs";
import Preparing from "../components/Preparing";
import Profile from "../components/Profile";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Reading from "../components/Reading";

const IndexPage = () => {
  return (
    <>
      <Helmet title="zuruzuru" defer={false} />
      <main className="index-main">
        <Marquee />
        <Profile />
        <Reading />
        <RecentBlogs />
        <Title title="その他コンテンツ" emoji="" />
        <Preparing />
        <hr />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
