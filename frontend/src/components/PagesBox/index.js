import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

import { BoxWrapper } from "./styles";
import PageBox from "../PageBox";

const PagesBox = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPageBox {
        nodes {
          id
          name
          description
          link
          buttonText
        }
      }
    }
  `);

  return (
    <BoxWrapper>
      <Grid>
        <Row>
          {data?.allSanityPageBox?.nodes.map((col) => (
            <PageBox
              key={col.id}
              name={col.name}
              description={col.description}
              link={col.link}
              buttonText={col.buttonText}
              colWidth={12 / data.allSanityPageBox.nodes.length}
            />
          ))}
        </Row>
      </Grid>
    </BoxWrapper>
  );
};

PagesBox.propTypes = {
  countToDisplay: PropTypes.number,
};

PagesBox.defaultProps = {
  countToDisplay: 3,
};

export default PagesBox;
