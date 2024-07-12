import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import ApxClockGraph from "./components/ApxClockGraph";
import AddEventForm from "./components/AddEventForm";

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Timetable Manager
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/add-event">
            Add Event
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<ApxClockGraph />} />
          <Route path="/add-event" element={<AddEventForm />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
