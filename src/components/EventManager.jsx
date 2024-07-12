import React, { useState, useEffect } from "react";
import AddEventForm from "./AddEventForm";
import EditEventForm from "./EditEventForm";
import { Box } from "@mui/material";

const EventManager = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshEvents = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <Box mt={4}>
      <AddEventForm refreshEvents={refreshEvents} />
      <EditEventForm key={refreshKey} refreshEvents={refreshEvents} />
    </Box>
  );
};

export default EventManager;
