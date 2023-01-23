import React from "react";

import Search from "./components/Search";
import Card from "./components/Card";
import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Search />
      <Card className="currentForecast"></Card>
      <Card className="todaysForecast"></Card>
      <Card className="airConditions"></Card>
      <Card className="sevenDaysForecast"></Card>
    </div>
  );
}

export default App;
