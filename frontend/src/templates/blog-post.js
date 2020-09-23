import React from "react";
import PropTypes from "prop-types";
import { Grid } from "react-styled-flexboxgrid";
import { graphql } from "gatsby";

import { Heading } from "../shared/Typography";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Img from "gatsby-image";
import PortableText from "@sanity/block-content-to-react";

export const query = graphql`
  query($id: String!) {
    sanityPost(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      publishedAt(formatString: "DD.MM.YYYYr.")
      mainImage {
        asset {
          fluid(maxWidth: 300) {
            ...GatsbySanityImageFluid
          }
          fixed {
            ...GatsbySanityImageFixed
          }
        }
      }
      categories {
        slug {
          current
        }
      }
      author {
        name
        slug {
          current
        }
      }
      _rawBody
    }
  }
`;

const BlogPost = ({ data }) => (
  <Layout>
    <Grid>
      <SEO title='Blog' type='blog' />
      <Heading mt={25} mb={3}>
        {data?.sanityPost.title}
      </Heading>
      <small>{data?.sanityPost.publishedAt}</small>
      {data?.sanityPost.mainImage && <Img fixed={data.sanityPost.mainImage.asset.fixed} className='mt-4' />}
      <PortableText blocks={data?.sanityPost._rawBody} className='mt-5' />
    </Grid>
  </Layout>
);

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPost;
