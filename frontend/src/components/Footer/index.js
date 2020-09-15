import React from "react";
import { FooterWrapper } from "./styles";

export const Footer = () => (
  <FooterWrapper>
    © {new Date().getFullYear()}, Built with
    {` `}
    Gatsby
  </FooterWrapper>
);

export default Footer;
