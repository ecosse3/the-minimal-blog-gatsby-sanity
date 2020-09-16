import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { useMediaQuery } from "react-responsive";

import { Container, DataContainer, DataWrapper, Slug, Title, Description, FancyLink } from "./styles";
import Image from "../Image";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityAuthor(slug: { current: { eq: "lukasz-kurpiewski" } }) {
        name
        shortBio
      }
    }
  `);

  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <DataWrapper>
              <DataContainer>
                <Slug>About me</Slug>
                <Title>Welcome friend.</Title>
                <Description>{data?.sanityAuthor.shortBio}</Description>
                <FancyLink to='/about'>More about me</FancyLink>
              </DataContainer>
            </DataWrapper>
          </Col>
          <Col xs={12} md={6}>
            <Image src='me.png' alt='Lukasz Kurpiewski' />
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default About;
