import * as React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <main>
      <title>About Page</title>
      <h1>このページはアバウトページです．</h1>
      <Link to="/">Home</Link>
    </main>
  );
};

export default AboutPage;
