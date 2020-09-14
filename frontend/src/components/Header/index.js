import React from "react";
import PropTypes from "prop-types";
import { HeaderContainer, Redirect, Title } from "./styles";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Grid>
      <Row>
        <Col>
          <Redirect to='/'>
            <Title>{siteTitle}</Title>
          </Redirect>
        </Col>
      </Row>
    </Grid>
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
