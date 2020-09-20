exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allSanityPost(sort: { order: DESC, fields: publishedAt }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  // Create paginated pages for posts

  const postsPerPage = 4;

  const numPages = Math.ceil(data.allSanityPost.edges.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        pages: numPages,
        currentPage: i + 1,
      },
    });
  });

  // // Create single blog post
  // data.allSanityPost.edges.forEach((edge) => {
  //   const slug = edge.node.slug.current;
  //   const id = edge.node.id;

  //   actions.createPages({
  //     path: slug,
  //     component: requre.resolve(`./src/templates/singlePost.js`),
  //     context: { id },
  //   });
  // });
};
