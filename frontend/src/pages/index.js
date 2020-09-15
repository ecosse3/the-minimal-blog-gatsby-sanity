import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Image from "../components/Image";
import SEO from "../components/SEO";
import Hero from "../components/Hero";

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Hero />
  </Layout>
);

export default IndexPage;
