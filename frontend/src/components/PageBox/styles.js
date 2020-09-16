import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const PageContainer = styled.div`
  position: relative;
  padding: 40px 80px 40px 0;

  ${(props) =>
    props.isMobile &&
    css`
      padding-right: 0;
      text-align: center;
    `}

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => (props.isMobile ? "100%" : "calc(100% - 90px)")};
    height: 2px;
    background: #000000;
    margin-bottom: 10px;
  }
`;

export const PageName = styled.h3`
  font-size: 30px;
  color: #000000;
`;

export const PageDescription = styled.p`
  color: #000000;
  font-size: 17px;
  margin-top: 10px;
`;

export const PageLink = styled(Link)`
  position: relative;
  color: #000000;
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
    background-color: #000000;
  }

  &:hover {
    &:before,
    &:after {
      opacity: 1;
      width: 100%;
    }
  }
`;
