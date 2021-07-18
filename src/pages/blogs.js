import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const AboutPage = () => {
  const recentBlogs = useStaticQuery(graphql`
    query RecentBlogsQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            url
          }
        }
      }
    }
  `);

  const card = recentBlogs.allMdx.nodes.map((node) => {
    return (
      <div key={node.frontmatter.title} className="card">
        <div className="card-header">
          <Link to={node.frontmatter.url}>{node.frontmatter.title}</Link>
        </div>
        <div className="card-body">
          <p>{node.frontmatter.description}</p>
        </div>
      </div>
    );
  });

  return (
    <main>
      <h1>Recent Blogs</h1>
      <title>About Page</title>
      {card}
      <Link to="/">Home</Link>
    </main>
  );
};

export default AboutPage;
