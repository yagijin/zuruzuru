/* default packages */
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

/* components */
import Footer from "../components/Footer";
import Header from "../components/Header";
import Tags from "../components/Tags";
import OGP from "../components/OGP";
import GoogleFonts from "../components/GoogleFonts";
import GoogleMap from "../components/GoogleMap";
import Twitter from "../components/Twitter";

const shortcodes = { Link, GoogleFonts, GoogleMap, Twitter };

export default function PageTemplate({ data: { mdx } }) {
  return (
    <>
      <OGP
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        url={mdx.frontmatter.url}
      />
      <main className="blog-template-main">
        <Header link="/blogs" title="Blog" />
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
