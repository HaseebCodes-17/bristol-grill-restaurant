import React, { useState, useEffect } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import dayjs from "dayjs";

const OpeningHoursDropdown = () => {
  const [currentDay, setCurrentDay] = useState(dayjs().format("dddd"));

  const openingHours = {
    Monday: "1:00 PM - 11:00 PM",
    Tuesday: "1:00 PM - 11:00 PM",
    Wednesday: "1:00 PM - 11:00 PM",
    Thursday: "1:00 PM - 11:00 PM",
    Friday: "1:00 PM - 11:00 PM",
    Saturday: "1:00 PM - 11:00 PM",
    Sunday: "1:00 PM - 11:00 PM",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDay(dayjs().format("dddd"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id="opening-hours-label">Opening Hours</InputLabel>
      <Select
        labelId="opening-hours-label"
        value={currentDay}
        label="Opening Hours"
      >
        {Object.keys(openingHours).map((day) => (
          <MenuItem key={day} value={day}>
            {day}: {openingHours[day]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default OpeningHoursDropdown;
