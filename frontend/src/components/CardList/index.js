import React from "react";

import Card from "../Card";

const CardList = ({ cards }) => {
  return (
    <>
      {cards?.map((card) => (
        <Card
          title={card.title}
          date={card.publishedAt}
          link={card.slug.current}
          key={card._id}
          mainImage={card.mainImage}
          isLinkLocal={true}
        />
      ))}
    </>
  );
};

export default CardList;
