import React from "react";

const CurrentWeather = () => {
  return (
    <div className="currentWeather">
      <div className="weather-description">
        <div className="location">
          <h2 className="location__name">City Name</h2>
          <h3 className="location__rain-chance">Chance of Rain</h3>
        </div>
        <div className="temperature-container">
          <h1 className="temperature">Current Temperature</h1>
        </div>
      </div>
      <div className="weather-image">Image</div>
    </div>
  );
};

export default CurrentWeather;
