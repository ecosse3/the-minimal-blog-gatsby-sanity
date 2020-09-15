import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import { Row, Col } from "react-styled-flexboxgrid";
import { SliderWrapper, Title, SliderContainer, Subtitle } from "./styles";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "yellow_circle.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            src
          }
        }
      }
    }
  `);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <SliderWrapper>
      <SliderContainer>
        <Slider {...settings}>
          <div>
            <Row between='xs' middle='xs'>
              <Col xs>
                <img src={data.image.childImageSharp.fluid.src} height={isMobile ? 400 : 600} />
              </Col>
              <Col xs>
                <Subtitle isMobile={isMobile}>Minimized Simplicity</Subtitle>
                <Title isMobile={isMobile}>The minimal blog</Title>
              </Col>
            </Row>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </SliderContainer>
    </SliderWrapper>
  );
};

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
