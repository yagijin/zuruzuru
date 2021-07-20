import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const BlogsPage = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [dispBlogs, setDispBlogs] = React.useState([]);
  const [textbox, setTextbox] = React.useState("");

  const allBlogs = useStaticQuery(graphql`
    query AllBlogsQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

  React.useEffect(() => {
    setBlogs(allBlogs.allMdx.nodes);
    setDispBlogs(allBlogs.allMdx.nodes);
  }, []);

  const filterBlogs = (text) => {
    setDispBlogs(
      blogs.filter(
        (blog) =>
          blog.frontmatter.title.toLowerCase().includes(text.toLowerCase()) ||
          blog.frontmatter.description
            .toLowerCase()
            .includes(text.toLowerCase()) ||
          blog.frontmatter.tags.some((tag) => {
            return tag.toLowerCase().includes(text.toLowerCase());
          })
      )
    );
  };

  const filterTags = (text) => {
    setDispBlogs(
      blogs.filter((blog) => {
        return blog.frontmatter.tags.some((tag) => {
          return tag.toLowerCase().includes(text.toLowerCase());
        });
      })
    );
  };

  const handleChange = (event) => {
    setTextbox(event.target.value);
    filterBlogs(event.target.value);
  };

  const card = dispBlogs.map((blog) => {
    return (
      <div key={blog.frontmatter.title} className="card">
        <div className="card-header">
          <Link to={blog.frontmatter.url}>{blog.frontmatter.title}</Link>
          {blog.frontmatter.tags.map((tag) => {
            return (
              <span key={tag} onClick={() => filterTags(tag)}>
                {tag}
              </span>
            );
          })}
        </div>
        <div className="card-body">
          <p>{blog.frontmatter.description}</p>
        </div>
      </div>
    );
  });

  return (
    <main>
      <title>Search Page</title>
      <h1>Blogs</h1>
      <label>
        検索
        <input type="text" size="10" value={textbox} onChange={handleChange} />
      </label>
      {card}
    </main>
  );
};

export default BlogsPage;
