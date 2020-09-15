import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { HeaderContainer, Redirect, Title } from "./styles";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const Header = ({ siteTitle }) => {
  return (
    <Grid>
      <Navbar bg='#FFF' expand='lg'>
        <Navbar.Brand href='#home'>{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>About</Nav.Link>
            <NavDropdown title='Blog' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Technology</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Travel</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Programming</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>All posts</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Grid>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
