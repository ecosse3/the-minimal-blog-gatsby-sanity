import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import PagesBox from "../components/PagesBox";
import About from "../components/About";

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Hero />
    <PagesBox />
    <About />
  </Layout>
);

export default IndexPage;
