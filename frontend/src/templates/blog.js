import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { graphql, Link } from "gatsby";
import { Pagination, PaginationItem } from "@material-ui/lab";

import { Heading } from "../shared/Typography";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import CardList from "../components/CardList";
import _ from "lodash";

export const query = graphql`
  query($limit: Int!, $skip: Int!, $category: [String]) {
    allSanityPost(
      sort: { order: DESC, fields: publishedAt }
      limit: $limit
      skip: $skip
      filter: { categories: { elemMatch: { slug: { current: { in: $category } } } } }
    ) {
      nodes {
        _id
        title
        slug {
          current
        }
        publishedAt(formatString: "DD.MM.YYYYr.")
        mainImage {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

const BlogPage = ({ data, pageContext }) => {
  const { currentPage, pages, category } = pageContext;

  const getPaginationLink = (item) => {
    if (item.page === 1 && typeof category === "object") {
      return "/blog";
    } else if (item.page > 1 && typeof category == "object") {
      return `/blog/${item.page}`;
    } else if (item.page === 1 && typeof category === "string") {
      return `/category/${category}`;
    } else {
      return `/category/${category}/${item.page}`;
    }
  };

  return (
    <Layout>
      <Grid>
        <SEO title='Blog' type='blog' />
        <header>
          <Heading mt={25}>{typeof category === "object" ? "Blog" : _.startCase(_.toLower(category))}</Heading>
        </header>
        <hr />
        <section>
          <Row>
            <CardList cards={data?.allSanityPost.nodes} />
          </Row>
        </section>
        {pages > 1 && (
          <section style={{ marginTop: "3rem" }}>
            <Row center='xs'>
              <Pagination
                page={currentPage}
                count={pages}
                renderItem={(item) => <PaginationItem component={Link} to={getPaginationLink(item)} {...item} />}
              />
            </Row>
          </section>
        )}
      </Grid>
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default BlogPage;
