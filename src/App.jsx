// src/App.js
import React from "react";
import D3ClockGraph from "./components/D3ClockGraph";
import ReClockGraph from "./components/ReClockGraph";
import ApxClockGraph from "./components/ApxClockGraph";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ApxClockGraph />
    </div>
  );
};

export default App;
