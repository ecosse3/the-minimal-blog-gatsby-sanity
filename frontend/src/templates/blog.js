import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { graphql } from "gatsby";

import { Heading } from "../shared/Typography";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import CardList from "../components/CardList";

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allSanityPost(sort: { order: DESC, fields: publishedAt }, limit: $limit, skip: $skip) {
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

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Grid>
        <SEO title='Blog' />
        <header>
          <Heading mt={25}>Blog</Heading>
        </header>
        <hr />
        <section>
          <Row>
            <CardList cards={data?.allSanityPost.nodes} />
          </Row>
        </section>
      </Grid>
    </Layout>
  );
};

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPage;
