import React, { useState } from "react";

import Search from "./components/Search";
import Card from "./components/Card";
import CurrentWeather from "./components/CurrentWeather";
import AirConditions from "./components/AirConditions";
import "./styles/app.scss";
import { REACT_APP_WEATHER_URL } from "./api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const selectSearchOptionHandler = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const getCurrentWeather = fetch(
      `${REACT_APP_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric
      `
    );
    const getForecastWeather = fetch(
      `${REACT_APP_WEATHER_URL}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric
      `
    );

    Promise.all([getCurrentWeather, getForecastWeather])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ ...weatherResponse });
        setForecast({ ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(currentWeather);

  return (
    <div className="App">
      <Search selectSearchOption={selectSearchOptionHandler} />
      {currentWeather && (
        <Card
          className="currentForecast"
          component={CurrentWeather}
          data={currentWeather}
        ></Card>
      )}
      {forecast && (
        <Card
          className="todaysForecast"
          component={AirConditions}
          data={forecast}
        ></Card>
      )}
      <Card className="airConditions"></Card>
      <Card className="sevenDaysForecast"></Card>
    </div>
  );
}

export default App;
