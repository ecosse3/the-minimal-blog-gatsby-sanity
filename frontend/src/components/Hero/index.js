import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import { Row, Col } from "react-styled-flexboxgrid";
import { SliderWrapper, Title } from "./styles";

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

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <Row between='xs' middle='xs'>
            <Col xs>
              <img src={data.image.childImageSharp.fluid.src} height='600' />
            </Col>
            <Col xs>
              <Title>The minimal blog</Title>
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
    </SliderWrapper>
  );
};

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
