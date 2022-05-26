import React from "react";
import "./Header.css";

const Header = ({ labels }) => {
  const headerLabels = labels.map(label => {
    return (
      <a href="/#" className="navButton" key={label}>
        {label}
      </a>
    );
  });
  return (
    <div className="header-container">
      <header>
        <div className="logo">
          <div>
            <a href="/#">
              <i className="fas fa-map-signs"></i>{" "}
            </a>
          </div>
          <div className="logoText">Meet NYC </div>
        </div>

        <nav>
          {headerLabels}

          <div className="_searchBarAutoCompleteDiv">
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search neighborhood"
                className="neighborhood_search-bar-input"
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
