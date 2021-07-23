import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <title>Home</title>
      <h1>This is Home Page</h1>
      <Link to="/recent">テックブログをススル</Link>
      <Link to="/map/morning">モーニングマップ🗺</Link>
      <Link to="/zurustagram">ズルスタグラム📷</Link>
    </main>
  );
};

export default IndexPage;
