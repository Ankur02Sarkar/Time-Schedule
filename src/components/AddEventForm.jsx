import React, { useState } from "react";

const AddEventForm = () => {
  const [event, setEvent] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [color, setColor] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      label: event,
      start: parseFloat(start),
      end: parseFloat(end),
      color,
    };
    const existingEvents = JSON.parse(localStorage.getItem("schedule")) || [];
    localStorage.setItem(
      "schedule",
      JSON.stringify([...existingEvents, newEvent])
    );
    setEvent("");
    setStart("");
    setEnd("");
    setColor("#000000");
    alert("Event added successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Event:</label>
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Start Time:</label>
        <input
          type="number"
          step="0.5"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          required
        />
      </div>
      <div>
        <label>End Time:</label>
        <input
          type="number"
          step="0.5"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;
