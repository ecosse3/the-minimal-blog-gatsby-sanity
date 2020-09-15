import styled from "styled-components";
import { Link } from "gatsby";

export const HeaderContainer = styled.header`
  background: transparent;
  font-family: "Poppins", sans-serif;
  color: #000000;
  padding-top: 1.45rem;
  padding-bottom: 1.45rem;
`;

export const Redirect = styled(Link)`
  color: #000000;
  text-decoration: none;
`;

export const Title = styled.h2`
  color: #222222;
  font-size: 1.25rem;
  font-weight: 600;
`;
