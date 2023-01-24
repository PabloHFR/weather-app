import React from "react";

import Search from "./components/Search";
import Card from "./components/Card";
import CurrentWeather from "./components/CurrentWeather";
import "./styles/app.scss";

function App() {
  const selectSearchOptionHandler = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="App">
      <Search selectSearchOption={selectSearchOptionHandler} />
      <Card className="currentForecast" component={CurrentWeather}></Card>
      <Card className="todaysForecast"></Card>
      <Card className="airConditions"></Card>
      <Card className="sevenDaysForecast"></Card>
    </div>
  );
}

export default App;
