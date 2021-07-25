import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Tags from "../components/Tags";

const shortcodes = { Link };

export default function PageTemplate({ data: { mdx } }) {
  return (
    <>
      <main className="blog-template-main">
        <Header link="/blogs" title="Tech Blog" />
        <p className="blog-template-date">{mdx.frontmatter.date}</p>
        <h1 className="blog-template-title">{mdx.frontmatter.title}</h1>
        <Tags tags={mdx.frontmatter.tags} />
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
        <hr />
      </main>
      <Footer />
    </>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
