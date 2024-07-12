// src/components/D3ClockGraph.js
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const D3ClockGraph = ({ schedule }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2;

    svg.attr("width", width).attr("height", height);

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const pie = d3
      .pie()
      .sort(null)
      .value((d) => d.end - d.start);

    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const data_ready = pie(schedule);

    g.selectAll("path")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i));

    g.selectAll("text")
      .data(data_ready)
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .style("fill", "white")
      .text((d) => d.data.label);
  }, [schedule]);

  return <svg ref={ref}></svg>;
};

export default D3ClockGraph;
