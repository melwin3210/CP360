import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../slices/CalendarSlice";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer
  }
});
