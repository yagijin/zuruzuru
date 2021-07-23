const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query AllBlogsId {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const blogs = result.data.allMdx.nodes;

  blogs.forEach((node) => {
    createPage({
      path:
        "/blog/" +
        node.frontmatter.date +
        "-" +
        node.frontmatter.title
          .toLowerCase()
          .replace(/　/g, "-")
          .replace(/ /g, "-"),
      component: path.resolve(`./src/components/BlogTemplate.js`),
      context: { id: node.id },
    });
  });
};
