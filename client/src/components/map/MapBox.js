import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./MapBox.css";

const axios = require("axios");

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGllZ29sZW9ybyIsImEiOiJjbDN4ZnV5enUwdHo0M2RxaDJ1ZWoxdjh0In0.LF-oI9_49zOGCGxCCHgYKA";

const MapBox = ({ displayMap,selectedNhood }) => {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(-74.006);
  const [lat, setLat] = useState(40.7128);
  const [zoom, setZoom] = useState(10);

  const display_map = displayMap === false ? "no-display" : "display-element";
  const display_label = displayMap === false ? "display-element" : "no-display";


  console.log(selectedNhood);
  
  let map;
  useEffect(() => {
    // if (displayMap === true) {
    setTimeout(() => {
      map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/diegoleoro/cl3xszwup008y14l1b2kcmww9",
        center: [lng, lat],
        zoom: zoom
      });

      map.resize();
    }, 2000);
  }, []);

  //---- AXIOS REQUEST ----//
  axios
    .get(
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
        "156 Hope Street Brooklyn New York" +
        ".json?access_token=" +
        "pk.eyJ1IjoiZGllZ29sZW9ybyIsImEiOiJjbDN4ZnV5enUwdHo0M2RxaDJ1ZWoxdjh0In0.LF-oI9_49zOGCGxCCHgYKA" +
        "&limit=1"
    )
    .then(res => {
    
    });

  //--------//

  return (
    <div className={"mbox-container " + display_map}>
      <div
        className={"_map_Box-container " + display_map}
        ref={mapContainerRef}
      ></div>
    </div>
  );
};

export default MapBox;

/*
      <div className={"tooltip " + display_label}>
        <div className="arrow_box">
          <p>This information is important so we can connect you </p>
          <p> to potential visitors to your neighborhood </p>
        </div>
      </div>

*/
