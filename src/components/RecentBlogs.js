import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Title from "../components/Title";
import Tags from "../components/Tags";

const RecentBlogs = () => {
  const allBlogs = useStaticQuery(graphql`
    query RecentBlogsQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
            url
            tags
          }
        }
      }
    }
  `);

  const card = allBlogs.allMdx.nodes.map((node) => {
    return (
      <div key={node.frontmatter.title} className="card">
        <h3 className="card-header recentblogs-indent">
          <Link to={node.frontmatter.url}>{node.frontmatter.title}</Link>
        </h3>
        <div className="recentblogs-indent">
          <Tags tags={node.frontmatter.tags} isSmall={true} />
        </div>
        <div className="recentblogs-indent">
          <p>{node.frontmatter.description}</p>
        </div>
        <hr />
      </div>
    );
  });

  return (
    <div className="recentblogs-main">
      <Title title="Recent Blogs" emoji="📖" />
      <hr />
      {card}
      <div className="recentblogs-show">
        <Link to="/blogs" className="not-default">
          ＞Show All
        </Link>
      </div>
    </div>
  );
};

export default RecentBlogs;
