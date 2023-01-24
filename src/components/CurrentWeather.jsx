import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div className="currentWeather">
      <div className="weather-description">
        <div className="location">
          <h2 className="location__name">{data.name}</h2>
          <h3 className="location__climate-description">
            {data.weather[0].description}
          </h3>
        </div>
        <div className="temperature-container">
          <h1 className="temperature">{Math.round(+data.main.temp)}°C</h1>
        </div>
      </div>
      <div className="weather-image">
        <img src={`icons/${data.weather[0].icon}.png`} alt="" />
      </div>
    </div>
  );
};

export default CurrentWeather;
