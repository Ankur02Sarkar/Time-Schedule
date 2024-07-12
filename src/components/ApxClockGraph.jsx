// src/components/ApxClockGraph.js
import React from "react";
import Chart from "react-apexcharts";

const ApxClockGraph = ({ schedule }) => {
  const options = {
    chart: {
      type: "pie",
    },
    labels: schedule.map((item) => item.label),
    colors: schedule.map((item) => item.color),
    legend: {
      position: "bottom",
    },
  };

  const series = schedule.map((item) => item.end - item.start);

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="pie"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ApxClockGraph;
