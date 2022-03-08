/* default packages */
import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

/* components */
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

const BlogsPage = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [dispBlogs, setDispBlogs] = React.useState([]);
  const [textbox, setTextbox] = React.useState("");

  const allBlogs = useStaticQuery(graphql`
    query AllBlogsQuery {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/blogs/" } }
      ) {
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

  const handleChange = (event) => {
    setTextbox(event.target.value);
    filterBlogs(event.target.value);
  };

  const blogPreviews =
    dispBlogs.length > 0 ? (
      dispBlogs.map((blog) => {
        return <BlogCard key={blog.frontmatter.title} blog={blog} />;
      })
    ) : (
      <p>一致する記事がありませんでした。</p>
    );

  return (
    <>
      <Helmet title="Blogs" defer={false} />
      <main className="blogs-main">
        <Header link="/blogs" title="All Blogs" />
        <div className="blogs-search">
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
        {blogPreviews}
      </main>
      <Footer />
    </>
  );
};

export default BlogsPage;
