import React from "react";

import Marks from "./Marks";
import "./Map.css";
import boroughsData from "../data/nyc_neighborhoods.json";

const Map = ({ neighborhoodData }) => {//neighborhoodData

  return (
    <div className="svg-div-container">
     {neighborhoodData ? (
       
          <div className ='neighborhood-description'>{neighborhoodData[0].Description}</div>
       
      ) : null} 
      <svg className="mapSvg" style={{ width: "580", height: "500" }}>
        <Marks data={boroughsData} 
         neighborhoodData={neighborhoodData} 
        />
      </svg>
    </div>
  );

};

export default Map;
