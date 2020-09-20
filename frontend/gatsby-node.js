const _ = require("lodash");

exports.createPages = async function ({ actions, graphql }) {
  // Consts

  const postsPerPage = 4;

  // Create paginated pages for all posts

  const posts = await graphql(`
    query {
      allSanityPost(sort: { order: DESC, fields: publishedAt }) {
        edges {
          node {
            id
            slug {
              current
            }
            categories {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `);

  if (posts.errors) {
    throw posts.errors;
  }

  // Create paginated pages for each category

  // Collect categories from all posts
  const categoriesPosts = [];
  const categoriesFound = [];
  posts.data.allSanityPost.edges.forEach((post) => {
    post.node.categories.forEach((cat) => {
      if (categoriesFound.indexOf(cat.slug.current) === -1) {
        categoriesFound.push(cat.slug.current);
      }
    });
  });

  categoriesFound.forEach((category) => {
    posts.data.allSanityPost.edges.forEach((post) => {
      post.node.categories.forEach((name) => {
        if (name.slug.current.includes(category) && categoriesPosts[category] === undefined) {
          categoriesPosts[category] = 1;
        } else if (name.slug.current.includes(category)) {
          categoriesPosts[category] = categoriesPosts[category] + 1 || 1;
        }
      });
    });

    const categoryPostsNumPages = Math.ceil(categoriesPosts[category] / postsPerPage);

    Array.from({ length: categoryPostsNumPages }).forEach((_, i) => {
      actions.createPage({
        path: i === 0 ? `/category/${category}` : `/category/${category}/${i + 1}`,
        component: require.resolve("./src/templates/blog.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          pages: categoryPostsNumPages,
          currentPage: i + 1,
          category,
        },
      });
    });
  });

  // All posts page

  const postsNumPages = Math.ceil(posts.data.allSanityPost.edges.length / postsPerPage);

  Array.from({ length: postsNumPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: require.resolve("./src/templates/blog.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        pages: postsNumPages,
        currentPage: i + 1,
        category: categoriesFound,
      },
    });
  });

  // Create single blog post
  // posts.data.allSanityPost.edges.forEach((edge) => {
  //   const slug = edge.node.slug.current;
  //   const id = edge.node.id;

  //   actions.createPages({
  //     path: `/blog/${slug}`,
  //     component: requre.resolve(`./src/templates/singlePost.js`),
  //     context: { id },
  //   });
  // });
};
