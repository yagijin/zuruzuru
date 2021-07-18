import React from "react";
import { qraphql, useStaticQuery } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "../styles/blog-template.scss";

const BlogTemplate = ({ children }) => {
  /*const data = useStaticQuery(graphql`
    query FrontmatterQuery {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        description
        url
      }
    }
  `);*/

  return (
    <>
      <Header />
      <main>
        <MDXProvider>{children}</MDXProvider>
      </main>
      <Footer />
    </>
  );
};

export default BlogTemplate;
