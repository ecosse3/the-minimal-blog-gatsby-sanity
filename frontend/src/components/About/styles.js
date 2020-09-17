import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const Container = styled.div`
  position: relative;
  background-color: #0c0c0c;
  width: 100%;
  padding: ${(props) => (props.isMobile ? "3rem 0 3rem 0" : "5rem")};
`;

export const DataWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  ${(props) =>
    props.isMobile &&
    css`
      margin-top: 30px;
    `}
`;

export const DataContainer = styled.div`
  position: relative;
`;

export const Slug = styled.h6`
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 600;

  &:before {
    content: "";
    position: absolute;
    top: -25px;
    left: 0;
    width: 80%;
    height: 2px;
    background: #000000;
    margin-bottom: 10px;
    ${(props) => props.isMobile && "display: none;"}
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: ${(props) => (props.isMobile ? "32px" : "60px")};
  font-weight: 600;
`;

export const Description = styled.p`
  color: #ffffff;
  font-size: 1rem;
  padding-bottom: 5px;
`;

export const FancyLink = styled(Link)`
  color: #ffffff;
  font-size: 18px;
  transition: all 0.1s ease-in-out;

  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0px;
    height: 3px;
    margin: 3px 0 0;
    transition: $animate;
    transition-duration: 0.75s;
    opacity: 0;
    background-color: #ffffff;
  }

  &:hover {
    color: #ffffff;

    &:before,
    &:after {
      opacity: 1;
      width: 140px;
    }
  }
`;
