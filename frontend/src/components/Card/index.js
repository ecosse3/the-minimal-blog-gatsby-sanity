import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { theme } from "../../styles/theme";
import { useMediaQuery } from "react-responsive";

import { Heading } from "../../shared/Typography";
import { Column } from "./styles";

const Card = ({ title, link, date, children, mainImage, imageOnly = false, isLinkLocal = true }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (imageOnly) {
    return (
      <Link to={`/blog/${link}`}>
        <Img fluid={mainImage.asset.fluid} />
      </Link>
    );
  }

  // const shortDescription = description.substring(0, 100) + "...";

  return (
    <Column xs={12} md={6}>
      <Link to={`/blog/${link}`}>
        {mainImage && <Img fluid={mainImage.asset.fluid} />}
        <Heading fontSize={isMobile ? 24 : 48} mt={20} color={theme.colors.black}>
          {title}
        </Heading>
        <small>{date}</small>
        {/* {shortDescription} */}
        {children}
      </Link>
    </Column>
  );
};

export default Card;
