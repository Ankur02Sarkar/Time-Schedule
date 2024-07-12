import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { MobileTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const AddEventForm = () => {
  const [event, setEvent] = useState("");
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [color, setColor] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!start || !end) {
      alert("Please select both start and end time.");
      return;
    }
    const newEvent = {
      label: event,
      start: start.hour() + start.minute() / 60,
      end: end.hour() + end.minute() / 60,
      color,
    };
    const existingEvents = JSON.parse(localStorage.getItem("schedule")) || [];
    localStorage.setItem(
      "schedule",
      JSON.stringify([...existingEvents, newEvent])
    );
    setEvent("");
    setStart(null);
    setEnd(null);
    setColor("#000000");
    alert("Event added successfully!");
  };

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Add Event
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Event"
              value={event}
              onChange={(e) => setEvent(e.target.value)}
              required
            />
          </Grid>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid item xs={6} sm={3}>
              <MobileTimePicker
                label="Start Time"
                value={start}
                onChange={(newValue) => setStart(newValue)}
                renderInput={(params) => (
                  <TextField fullWidth {...params} required />
                )}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <MobileTimePicker
                label="End Time"
                value={end}
                onChange={(newValue) => setEnd(newValue)}
                renderInput={(params) => (
                  <TextField fullWidth {...params} required />
                )}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                fullWidth
                type="color"
                label="Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
          </LocalizationProvider>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Event
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddEventForm;
