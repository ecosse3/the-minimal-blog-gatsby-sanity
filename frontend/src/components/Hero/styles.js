import styled from "styled-components";

export const SliderWrapper = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  margin-bottom: 4rem;
`;

export const SliderContainer = styled.div`
  margin-top: -2rem;
  max-height: 550px;
`;

export const Title = styled.div`
  font-family: "Poppins";
  font-weight: 900;
  font-size: ${(props) => (props.isMobile ? "56px" : "92px")};
  line-height: 1.24;
  margin-left: -25%;
`;

export const Subtitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin-left: -25%;
  text-transform: uppercase;
`;
