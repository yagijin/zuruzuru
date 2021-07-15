// src/components/layout.js
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Header from "./Header.js";
import "../styles/blog-template.scss";

 const BlogTemplate = ({ children }) => (
  <>
    <Header/>
    <main>
      <MDXProvider>{children}</MDXProvider>
    </main>  
  </>
)

export default BlogTemplate;
