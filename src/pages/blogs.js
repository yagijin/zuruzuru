import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as styles from "../styles/blogs.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tags from "../components/Tags";

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

  const card =
    dispBlogs.length > 0 ? (
      dispBlogs.map((blog) => {
        return (
          <div key={blog.frontmatter.title} className="card">
            <div className="card-header">
              <h2>
                <Link to={blog.frontmatter.url}>{blog.frontmatter.title}</Link>
              </h2>
              <Tags tags={blog.frontmatter.tags} isSmall={true} />
            </div>
            <div className="card-body">
              <p>{blog.frontmatter.description}</p>
            </div>
            <hr />
          </div>
        );
      })
    ) : (
      <p>一致する記事がありませんでした。</p>
    );

  return (
    <>
      <main className={styles.main}>
        <title>Search Page</title>
        <Header link="/blogs" title="Tech Blogs" />
        <div className={styles.search}>
          <label>
            検索：
            <input
              type="text"
              size="25"
              value={textbox}
              onChange={handleChange}
            />
          </label>
        </div>
        {card}
      </main>
      <Footer />
    </>
  );
};

export default BlogsPage;
