import React from "react";

const FiveDayForecast = ({ data }) => {
  return (
    <div className="five-days-forecast">
      <h3>5-Day Forecast</h3>
      <div className="five-days-container">
        <div className="days">
          <h4 className="weekday">Weekday</h4>
          <div className="description-container">
            <img src="icons/01d.png" alt="" />
            <p>Sunny</p>
          </div>
          <p className="temperature">x/x</p>
        </div>
        <div className="days">
          <h4 className="weekday">Weekday</h4>
          <div className="description-container">
            <img src="icons/01d.png" alt="" />
            <p>Sunny</p>
          </div>
          <p className="temperature">x/x</p>
        </div>
        <div className="days">
          <h4 className="weekday">Weekday</h4>
          <div className="description-container">
            <img src="icons/01d.png" alt="" />
            <p>Sunny</p>
          </div>
          <p className="temperature">x/x</p>
        </div>
        <div className="days">
          <h4 className="weekday">Weekday</h4>
          <div className="description-container">
            <img src="icons/01d.png" alt="" />
            <p>Sunny</p>
          </div>
          <p className="temperature">x/x</p>
        </div>
        <div className="days">
          <h4 className="weekday">Weekday</h4>
          <div className="description-container">
            <img src="icons/01d.png" alt="" />
            <p>Sunny</p>
          </div>
          <p className="temperature">x/x</p>
        </div>
      </div>
    </div>
  );
};

export default FiveDayForecast;
