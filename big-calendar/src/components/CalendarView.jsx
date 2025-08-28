import  { useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { useDispatch, useSelector } from "react-redux";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { setSelectedDate, setEvents, setLoading } from "../redux/slices/CalendarSlice";
import dummyData from "../data/dummyData";
import CalendarShimmer from "./CalendarShimmer";

const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({ format, parse, startOfWeek, getDay, locales });

export default function CalendarView() {
  const dispatch = useDispatch();
  const { events: eventsData, loading } = useSelector((state) => state.calendar);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const response = await fetch('data:application/json;base64,' + btoa(JSON.stringify(dummyData)));
        const data = await response.json();
        dispatch(setEvents(data));
      } catch (error) {
        console.error('Failed to fetch data:', error);
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

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

  if (loading) {
    return <CalendarShimmer />;
  }

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 450 }}
      selectable
      onSelectSlot={handleSelect}
      onSelectEvent={handleSelect}
    />
  );
}
