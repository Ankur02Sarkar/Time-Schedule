import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import ApxClockGraph from "./components/ApxClockGraph";
import EventManager from "./components/EventManager";

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button variant="inherit" component={Link} to="/">
            Timetable Manager
          </Button>
          <Button color="inherit" component={Link} to="/event">
            Event
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<ApxClockGraph />} />
          <Route path="/event" element={<EventManager />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
