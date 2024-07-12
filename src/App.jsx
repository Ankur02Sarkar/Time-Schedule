// src/App.js
import React from "react";
import D3ClockGraph from "./components/D3ClockGraph";
import ReClockGraph from "./components/ReClockGraph";
import ApxClockGraph from "./components/ApxClockGraph";

const schedule = [
  { label: "Sleep", start: 0, end: 7, color: "#1f77b4" },
  { label: "Breakfast", start: 7, end: 7.5, color: "#ff7f0e" },
  { label: "Commute", start: 7.5, end: 8.5, color: "#2ca02c" },
  { label: "School", start: 8.5, end: 15.5, color: "#d62728" },
  { label: "Tennis", start: 15.5, end: 18.5, color: "#9467bd" },
  { label: "Commute", start: 18.5, end: 19, color: "#8c564b" },
  { label: "Dinner", start: 19, end: 20, color: "#e377c2" },
  { label: "Study", start: 20, end: 21, color: "#7f7f7f" },
  { label: "Reading", start: 21, end: 22, color: "#bcbd22" },
  { label: "Free", start: 22, end: 24, color: "#17becf" },
];

const App = () => {
  return (
    <div className="App">
      <h1>Clock Schedule Graph</h1>
      <D3ClockGraph schedule={schedule} />
      <ReClockGraph schedule={schedule} />
      <ApxClockGraph schedule={schedule} />
    </div>
  );
};

export default App;
