import React from "react";

const TodaysForecast = ({ data }) => {
  console.log(data);
  console.log(data.list[0].dt_txt.slice(11, 16));
  return (
    <div className="todays-forecast-container">
      <h3>Today's Forecast</h3>
      <div className="todays-forecast--hours">
        <div className="hours">
          <h4 className="hours">{data.list[0].dt_txt.slice(11, 16)}</h4>
          <img
            className="climate-img"
            src={`icons/${data.list[0].weather[0].icon}.png`}
            alt=""
          />
          <p className="temperature">{Math.round(data.list[0].main.temp)}°C</p>
        </div>
        <div className="hours">
          <h4 className="hours">{data.list[1].dt_txt.slice(11, 16)}</h4>
          <img
            className="climate-img"
            src={`icons/${data.list[1].weather[0].icon}.png`}
            alt=""
          />
          <p className="temperature">{Math.round(data.list[1].main.temp)}°C</p>
        </div>
        <div className="hours">
          <h4 className="hours">{data.list[2].dt_txt.slice(11, 16)}</h4>
          <img
            className="climate-img"
            src={`icons/${data.list[2].weather[0].icon}.png`}
            alt=""
          />
          <p className="temperature">{Math.round(data.list[2].main.temp)}°C</p>
        </div>
        <div className="hours">
          <h4 className="hours">{data.list[3].dt_txt.slice(11, 16)}</h4>
          <img
            className="climate-img"
            src={`icons/${data.list[3].weather[0].icon}.png`}
            alt=""
          />
          <p className="temperature">{Math.round(data.list[3].main.temp)}°C</p>
        </div>
        <div className="hours">
          <h4 className="hours">{data.list[4].dt_txt.slice(11, 16)}</h4>
          <img
            className="climate-img"
            src={`icons/${data.list[4].weather[0].icon}.png`}
            alt=""
          />
          <p className="temperature">{Math.round(data.list[4].main.temp)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default TodaysForecast;
