import React from "react";

const FiveDayForecast = ({ data }) => {
  function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getUTCDay()];
  }
  return (
    <div className="five-days-forecast">
      <h3>5-Day Forecast</h3>
      <div className="five-days-container">
        <div className="days">
          <h4 className="weekday">{getDayOfWeek(data.list[7].dt_txt)}</h4>
          <div className="description-container">
            <img src={`icons/${data.list[7].weather[0].icon}.png`} alt="" />
            <p>{data.list[7].weather[0].description}</p>
          </div>
          <p className="temperature">{Math.round(data.list[7].main.temp)}°C</p>
        </div>
        <div className="days">
          <h4 className="weekday">{getDayOfWeek(data.list[15].dt_txt)}</h4>
          <div className="description-container">
            <img src={`icons/${data.list[15].weather[0].icon}.png`} alt="" />
            <p>{data.list[15].weather[0].description}</p>
          </div>
          <p className="temperature">{Math.round(data.list[15].main.temp)}°C</p>
        </div>
        <div className="days">
          <h4 className="weekday">{getDayOfWeek(data.list[23].dt_txt)}</h4>
          <div className="description-container">
            <img src={`icons/${data.list[23].weather[0].icon}.png`} alt="" />
            <p>{data.list[23].weather[0].description}</p>
          </div>
          <p className="temperature">{Math.round(data.list[23].main.temp)}°C</p>
        </div>
        <div className="days">
          <h4 className="weekday">{getDayOfWeek(data.list[31].dt_txt)}</h4>
          <div className="description-container">
            <img src={`icons/${data.list[31].weather[0].icon}.png`} alt="" />
            <p>{data.list[31].weather[0].description}</p>
          </div>
          <p className="temperature">{Math.round(data.list[31].main.temp)}°C</p>
        </div>
        <div className="days">
          <h4 className="weekday">{getDayOfWeek(data.list[39].dt_txt)}</h4>
          <div className="description-container">
            <img src={`icons/${data.list[39].weather[0].icon}.png`} alt="" />
            <p>{data.list[39].weather[0].description}</p>
          </div>
          <p className="temperature">
            {Math.round(data.list[39].main.temp_max)}°C
          </p>
        </div>
      </div>
    </div>
  );
};

export default FiveDayForecast;
