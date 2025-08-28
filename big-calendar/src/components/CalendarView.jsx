import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { useDispatch, useSelector } from "react-redux";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { setSelectedDate } from "../redux/slices/CalendarSlice";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

export default function CalendarView() {
  const dispatch = useDispatch();
  const eventsData = useSelector((state) => state.calendar.events);

  // Convert dummy data to events
  const events = Object.keys(eventsData).map((date) => {
    const [day, month, year] = date.split("-");
    return {
      title: `${eventsData[date].length} Users`,
      start: new Date(`${year}-${month}-${day}`),
      end: new Date(`${year}-${month}-${day}`)
    };
  });

  const handleSelect = ({ start }) => {
    const dateStr = format(start, "dd-MM-yyyy");
    dispatch(setSelectedDate(dateStr));
  };

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 600 }}
      selectable
      onSelectSlot={handleSelect}
      onSelectEvent={handleSelect}
    />
  );
}
