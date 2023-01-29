import React from "react";

const AirConditions = ({ data }) => {
  return (
    <div className="air-conditions">
      <h3>Air Conditions</h3>
      <div className="conditions">
        <div className="real-feel-wind-container">
          <div className="real-feel">
            <h4 className="real-feel__title">
              <span className="material-symbols-outlined">
                device_thermostat
              </span>
              Real Feel
            </h4>
            <p className="real-feel__temperature">
              {Math.round(data.main.feels_like)}°C
            </p>
          </div>
          <div className="wind">
            <h4 className="wind__title">
              <span className="material-symbols-outlined">air</span>
              Wind
            </h4>
            <p className="wind__speed">
              {Math.round(data.wind.speed * 3.6)} km/h
            </p>
          </div>
        </div>
        <div className="humidity-pressure-container">
          <div className="humidity">
            <h4 className="humidity__title">
              <span className="material-symbols-outlined">
                humidity_percentage
              </span>
              Humidity
            </h4>
            <p className="humidity__percentage">{data.main.humidity}%</p>
          </div>
          <div className="pressure">
            <h4 className="pressure__title">
              <span className="material-symbols-outlined">compress</span>
              Pressure
            </h4>
            <p className="pressure__pressure">{data.main.pressure} mb</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
