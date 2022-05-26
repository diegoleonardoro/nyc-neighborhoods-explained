import React from "react";
import { geoPath, geoMercator } from "d3";
import "./Marks.css";

const Marks = ({ data, neighborhoodData }) => {
  const projection = geoMercator().fitSize(["960", "500"], data);
  const path = geoPath(projection);

  let cx_cy;
  if (neighborhoodData) {
    cx_cy = projection(neighborhoodData[0].the_geom);
  }

  console.log(neighborhoodData);

  return (
    <g className="marks">
      {data.features.map((feature, i) => (
        <path className="mapPath" key={i} d={path(feature)} />
      ))}

      {cx_cy ? (
        <line
          x1={cx_cy[0]}
          y1={cx_cy[1]}
          x2={cx_cy[0]}
          y2={-100}

          style={{stroke:'#f56410', strokeWidth:2}}
        />
      ) : null}

      {cx_cy ? (
        <circle
          className="neighborhoodCircle"
          cx={cx_cy[0]}
          cy={cx_cy[1]}
          r={8}
        />
      ) : null}
    </g>
  );
};

export default Marks;
