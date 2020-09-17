import React from "react";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { useStaticQuery, graphql } from "gatsby";

import { Heading } from "../shared/Typography";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import CardList from "../components/CardList";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPost(sort: { order: DESC, fields: publishedAt }) {
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
  `);

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

export default BlogPage;
