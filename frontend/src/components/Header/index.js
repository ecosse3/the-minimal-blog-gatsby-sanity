import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Grid } from "react-styled-flexboxgrid";
import { theme } from "../../styles/theme";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query MenuItemsQuery {
      allSanityCategory(sort: { fields: title }) {
        nodes {
          id
          title
          slug {
            current
          }
        }
      }
    }
  `);

  return (
    <Grid>
      <Navbar bg={theme.colors.white} expand='lg' style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Navbar.Brand href='/'>{siteTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <NavDropdown title='Blog' id='basic-nav-dropdown'>
              {data?.allSanityCategory?.nodes.map((item) => (
                <NavDropdown.Item href={`/category/${item.slug.current}`} key={item.id}>
                  {item.title}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href='/blog'>All posts</NavDropdown.Item>
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
