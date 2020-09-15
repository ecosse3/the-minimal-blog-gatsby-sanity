import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global";
import { theme } from "../../styles/theme";
import { Grid } from "react-styled-flexboxgrid";

import Header from "../Header";
import Footer from "../Footer";
import "./styles.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header siteTitle={siteTitle} />
      <Grid>
        <main>{children}</main>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
