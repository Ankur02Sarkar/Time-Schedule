// src/components/ReClockGraph.js
import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const ReClockGraph = ({ schedule }) => {
  const data = schedule.map((item, index) => ({
    name: item.label,
    value: item.end - item.start,
    color: item.color,
  }));

  const COLORS = data.map((item) => item.color);

  return (
    <PieChart width={500} height={500}>
      <Pie
        data={data}
        cx={250}
        cy={250}
        innerRadius={0}
        outerRadius={200}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label={({ name }) => name}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default ReClockGraph;
