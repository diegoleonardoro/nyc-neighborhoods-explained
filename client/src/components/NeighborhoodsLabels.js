import React from "react";

import "./Neighborhoods.css";

const NeighborhoodsLabels = ({ neighborhoods, onSelectedChange }) => {
 
  const onNeighborhoodClick = neighborhood => {
    onSelectedChange(neighborhood);
  };
  const renderedNeighborhoods = neighborhoods.map((item, index) => {
    return (
      <div
        onClick={() => {
          onNeighborhoodClick(item);
        }}
        className="neighborhood"
        key={item}
      >
        {item}
      </div>
    );
  });
  return <div className="neighborhoodsContainer">{renderedNeighborhoods}</div>;
};

export default NeighborhoodsLabels;
