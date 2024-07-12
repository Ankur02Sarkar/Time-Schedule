import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Box, Typography } from "@mui/material";

const ApxClockGraph = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const storedSchedule = JSON.parse(localStorage.getItem("schedule")) || [];
    setSchedule(storedSchedule);
  }, []);

  const options = {
    chart: {
      type: "pie",
    },
    labels: schedule.map((item) => item.label),
    colors: schedule.map((item) => item.color),
    legend: {
      position: "bottom",
    },
    tooltip: {
      y: {
        formatter: function (val, opts) {
          return `${opts.w.globals.labels[opts.seriesIndex]}: ${val.toFixed(
            2
          )} hours (${((val / 24) * 100).toFixed(2)}%)`;
        },
      },
    },
  };

  const series = schedule.map((item) => item.end - item.start);

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Timetable Chart
      </Typography>
      <Chart
        options={options}
        series={series}
        type="pie"
        width={500}
        height={500}
      />
    </Box>
  );
};

export default ApxClockGraph;
