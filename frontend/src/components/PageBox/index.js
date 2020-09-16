import React from "react";
import PropTypes from "prop-types";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { useMediaQuery } from "react-responsive";

import { PageContainer, PageName, PageDescription, PageLink } from "./styles";

const PageBox = ({ name, description, link, buttonText, colWidth }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Col xs={12} md={colWidth}>
      <PageContainer isMobile={isMobile}>
        <PageName>{name}</PageName>
        <PageDescription>{description}</PageDescription>
        <PageLink to={link}>{buttonText}</PageLink>
      </PageContainer>
    </Col>
  );
};

PageBox.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  colWidth: PropTypes.number.isRequired,
};

export default PageBox;
