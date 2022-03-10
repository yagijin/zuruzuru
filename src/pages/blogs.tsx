/* default packages */
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

/* components */
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([])
  const [dispBlogs, setDispBlogs] = useState([])
  const [searchbox, setSearchbox] = useState('')

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
  `)

  useEffect(() => {
    setBlogs(allBlogs.allMdx.nodes)
    setDispBlogs(allBlogs.allMdx.nodes)
  }, [])

  const handleChange = (event) => {
    setSearchbox(event.target.value)
    setDispBlogs(
      blogs.filter(
        (blog) =>
          // @ts-ignore
          blog.frontmatter.title
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          // @ts-ignore
          blog.frontmatter.description
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          // @ts-ignore
          blog.frontmatter.tags.some((tag) => {
            return tag.toLowerCase().includes(event.target.value.toLowerCase())
          })
      )
    )
  }

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
              size={25}
              value={searchbox}
              onChange={handleChange}
            />
          </label>
        </div>
        {dispBlogs.length > 0 ? (
          dispBlogs.map((blog) => {
            // @ts-ignore
            return <BlogCard key={blog.frontmatter.title} blog={blog} />
          })
        ) : (
          <p>一致する記事がありませんでした。</p>
        )}
      </main>
      <Footer />
    </>
  )
}

export default BlogsPage
