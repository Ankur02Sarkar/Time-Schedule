import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ApxClockGraph from "./components/ApxClockGraph";
import AddEventForm from "./components/AddEventForm";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-event">Add Event</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ApxClockGraph />} />
          <Route path="/add-event" element={<AddEventForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
