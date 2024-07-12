import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Select,
  MenuItem,
} from "@mui/material";
import { MobileTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const EditEventForm = ({ refreshEvents }) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("schedule")) || [];
    setEvents(storedEvents);
  }, []);

  const handleSelectChange = (e) => {
    const event = events.find((ev) => ev.label === e.target.value);
    setSelectedEvent(event);
    setStart(
      dayjs()
        .hour(event.start)
        .minute((event.start % 1) * 60)
    );
    setEnd(
      dayjs()
        .hour(event.end)
        .minute((event.end % 1) * 60)
    );
    setColor(event.color);
  };

  const handleSave = () => {
    if (!start || !end || !selectedEvent) {
      alert("Please select both start and end time.");
      return;
    }

    const updatedEvent = {
      ...selectedEvent,
      start: start.hour() + start.minute() / 60,
      end: end.hour() + end.minute() / 60,
      color,
    };

    const updatedEvents = events.map((ev) =>
      ev.label === selectedEvent.label ? updatedEvent : ev
    );

    localStorage.setItem("schedule", JSON.stringify(updatedEvents));
    alert("Event updated successfully!");
    refreshEvents();
  };

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Edit Event
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Select
            fullWidth
            value={selectedEvent ? selectedEvent.label : ""}
            onChange={handleSelectChange}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select Event
            </MenuItem>
            {events.map((event) => (
              <MenuItem key={event.label} value={event.label}>
                {event.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        {selectedEvent && (
          <>
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
              <Button
                onClick={handleSave}
                variant="contained"
                color="primary"
                fullWidth
              >
                Save Event
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default EditEventForm;
