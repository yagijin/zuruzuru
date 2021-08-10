/* default packages */
import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

/* components */
import Title from "../components/Title";
import BlogCard from "../components/BlogCard";

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

  const blogsPreview = allBlogs.allMdx.nodes.map((node) => {
    return <BlogCard key={node.frontmatter.title} blog={node} />;
  });

  return (
    <div>
      <Title title="Recent Blogs" emoji="📖" />
      {blogsPreview}
      <Link to="/blogs" className="not-default">
        Show All
      </Link>
    </div>
  );
};

export default RecentBlogs;
