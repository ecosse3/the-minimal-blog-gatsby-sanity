import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { useMediaQuery } from "react-responsive";

import { Container, DataContainer, DataWrapper, Slug, Title, Description, ImageWrapper, FancyLink } from "./styles";
import Image from "../Image";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const data = useStaticQuery(graphql`
    query {
      sanityAuthor(slug: { current: { eq: "lukasz-kurpiewski" } }) {
        name
        shortBio
      }
    }
  `);

  return (
    <Container isMobile={isMobile}>
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <DataWrapper>
              <DataContainer>
                <Slug isMobile={isMobile}>About me</Slug>
                <Title isMobile={isMobile}>Welcome friend.</Title>
                <Description isMobile={isMobile}>{data?.sanityAuthor.shortBio}</Description>
                <FancyLink to='/about' isMobile={isMobile}>
                  More about me
                </FancyLink>
              </DataContainer>
            </DataWrapper>
          </Col>
          <Col xs={12} md={6}>
            <ImageWrapper isMobile={isMobile}>
              <Image src='me.png' alt='Lukasz Kurpiewski' />
            </ImageWrapper>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default About;
