import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Box, Typography } from "@mui/material";

const ApxClockGraph = () => {
  const [schedule, setSchedule] = useState([]);
  const [currentTimeSlot, setCurrentTimeSlot] = useState("");

  useEffect(() => {
    const storedSchedule = JSON.parse(localStorage.getItem("schedule")) || [];
    setSchedule(storedSchedule);
    updateCurrentTimeSlot(storedSchedule);
  }, []);

  const updateCurrentTimeSlot = (schedule) => {
    const currentTime = new Date().getHours() + new Date().getMinutes() / 60;
    const currentSlot = schedule.find(
      (item) => currentTime >= item.start && currentTime < item.end
    );
    setCurrentTimeSlot(currentSlot ? currentSlot.label : "No current slot");
  };

  useEffect(() => {
    const interval = setInterval(() => updateCurrentTimeSlot(schedule), 60000); // Update every minute
    return () => clearInterval(interval);
  }, [schedule]);

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
          )} hours`;
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.globals.labels[opts.seriesIndex];
      },
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        customScale: 1,
        offsetX: 0,
        offsetY: 0,
        expandOnClick: true,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10,
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
      <Typography variant="h6" mt={2}>
        Current Time Slot: {currentTimeSlot}
      </Typography>
    </Box>
  );
};

export default ApxClockGraph;
