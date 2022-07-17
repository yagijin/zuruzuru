import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as styles from '@/styles/pages/blogs.module.scss'
import PageLayout from '@/layouts/PageLayout'
import BlogCard from '../components/BlogCard'

type blog = {
  frontmatter: {
    title: string
    description: string
    url: string
    tags: string[]
  }
}

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<Array<blog>>([])
  const [dispBlogs, setDispBlogs] = useState<Array<blog>>([])
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchbox(event.target.value)
    setDispBlogs(
      blogs.filter(
        (blog) =>
          blog.frontmatter.title
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          blog.frontmatter.description
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          blog.frontmatter.tags.some((tag) => {
            return tag.toLowerCase().includes(event.target.value.toLowerCase())
          })
      )
    )
  }

  return (
    <PageLayout
      head={{
        title: 'Blogs',
        type: 'website',
        description: 'blogs',
        url: '/blogs',
      }}
    >
      <div className={styles.blogs}>
        <div className={styles.search}>
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
          dispBlogs.map((blog, index) => {
            return (
              <>
                {index !== 0 && <hr />}
                <BlogCard key={blog.frontmatter.title} blog={blog} />
              </>
            )
          })
        ) : (
          <p>一致する記事がありませんでした。</p>
        )}
      </div>
    </PageLayout>
  )
}

export default BlogsPage
