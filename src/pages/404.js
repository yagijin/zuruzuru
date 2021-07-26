import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <>
      <main className="notfound">
        <title>Not found</title>
        <Header title="Not found" />
        <h1>Page Not Found</h1>
        <p>お探しのページは見つかりませんでした。</p>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundPage;
