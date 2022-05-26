import React, { useState, useRef } from "react";

import NeighborhoodsLabels from "./NeighborhoodsLabels";
import "./Boroughs.css";

const Boroughs = ({ neighborhoods, onSelectedChange }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRef();

  let display;

  const renderedItems = neighborhoods.map((item, index) => {
    display = index === activeIndex ? "active" : "doNotDisplay";

    return (
      <React.Fragment key={item.borough}>
        <div ref={ref} className="title-arrow-container">
          <div
            style={{ cursor: "pointer", marginBottom: "10px" }}
            className="boroughTitle"
            onClick={e => {

              if (e.target.className.indexOf("neighborhood") > -1) {
                return;
              }
              
              setActiveIndex(index === activeIndex ? null : index);
            }}
          >
            {item.borough}
            <div className={"boroughDescription " + display}>
              <NeighborhoodsLabels
                neighborhoods={item.neighborhoods}
                onSelectedChange={onSelectedChange}
              />
            </div>
          </div>
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </React.Fragment>
    );
  });

  return <div className="boroughsContainer">{renderedItems}</div>;
};

export default Boroughs;
