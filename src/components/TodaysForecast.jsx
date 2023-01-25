import React from "react";

const TodaysForecast = () => {
  return (
    <div className="todays-forecast-container">
      <h3>Today's Forecast</h3>
      <div className="todays-forecast--hours">
        <div className="hours">
          <h4 className="hours">06:00</h4>
          <img className="climate-img" src={`icons/01d.png`} alt="" />
          <p className="temperature">x°C</p>
        </div>
        <div className="hours">
          <h4 className="hours">06:00</h4>
          <img className="climate-img" src={`icons/01d.png`} alt="" />
          <p className="temperature">x°C</p>
        </div>
        <div className="hours">
          <h4 className="hours">06:00</h4>
          <img className="climate-img" src={`icons/01d.png`} alt="" />
          <p className="temperature">x°C</p>
        </div>
        <div className="hours">
          <h4 className="hours">06:00</h4>
          <img className="climate-img" src={`icons/01d.png`} alt="" />
          <p className="temperature">x°C</p>
        </div>
        <div className="hours">
          <h4 className="hours">06:00</h4>
          <img className="climate-img" src={`icons/01d.png`} alt="" />
          <p className="temperature">x°C</p>
        </div>
      </div>
    </div>
  );
};

export default TodaysForecast;
