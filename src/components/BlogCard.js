/* default packages */
import * as React from "react";
import { Link } from "gatsby";

/* components */
import Tags from "../components/Tags";

const BlogCard = (props) => {
  return (
    <div className="blogcard-main">
      <h3>
        <Link to={props.blog.frontmatter.url}>
          {props.blog.frontmatter.title}
        </Link>
      </h3>
      <Tags tags={props.blog.frontmatter.tags} isSmall={true} />
      <p>{props.blog.frontmatter.description}</p>
      <hr />
    </div>
  );
};

export default BlogCard;
