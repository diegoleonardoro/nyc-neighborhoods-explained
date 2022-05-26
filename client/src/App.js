import React, { useState } from "react";
// import Data from "./components/Data";
import Header from "./components/Header";
import Boroughs from "./components/Boroughs";
import Map from "./components/Map";
import Illustration from "./components/Illustration";
import "./App.css";

import boroughsData from "./data/boroughsData.json";

//--- get the neighborhood names from each borough --- :
const selectNeighborhoodNames = array => {
  const boroughs = [
    "Manhattan",
    "Queens",
    "Brooklyn",
    "Bronx",
    "Staten Island"
  ];
  let nhoodsArr = [];
  for (var i = 0; i < boroughs.length; i++) {
    let borough = boroughs[i];
    let neighborhoods = array
      .filter(item => item.Borough === borough)
      .map(({ Description, the_geom, Borough, ...rest }) => {
        return rest;
      });

    let neighborhoodsAlone = [];
    neighborhoods.map(item => {
      neighborhoodsAlone.push(Object.values(item)[0]);
    });
    nhoodsArr.push({ borough, neighborhoods: neighborhoodsAlone });
  }
  return nhoodsArr;
};
const neighborhoods = selectNeighborhoodNames(boroughsData);
//------- ------ ------ ------ ------ ------ ------ ------ ------ ------

function App() {
  const [selectedNhood, setSelectedNhood] = useState("");

  let neighborhoodData;
  if (selectedNhood) {
    neighborhoodData = boroughsData.filter(item => item.Name === selectedNhood);
  }

  return (
    <div className="App">
      <Header labels={["About", "Log in", "Register"]} />

      <div className='title-illustration-container'>
        <h1 className="title">Explore Neighborhoods:</h1>
        <Illustration />
      </div>

      <div className="boroughs-map-container">
        <Boroughs
          neighborhoods={neighborhoods}
          onSelectedChange={setSelectedNhood}
        />
        <Map neighborhoodData={neighborhoodData} />
      </div>
    </div>
  );
}

export default App;
