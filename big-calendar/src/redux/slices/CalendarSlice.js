import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../../data/dummyData";

const initialState = {
  events: dummyData,
  selectedDate: null,
  modalOpen: false
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
      state.modalOpen = !!state.events[action.payload];
    },
    closeModal: (state) => {
      state.modalOpen = false;
    }
  }
});

export const { setSelectedDate, closeModal } = calendarSlice.actions;
export default calendarSlice.reducer;
