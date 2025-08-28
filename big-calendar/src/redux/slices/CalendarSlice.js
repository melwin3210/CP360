import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  events: {},
  selectedDate: null,
  modalOpen: false,
  loading: false
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
    setEvents: (state, action) => {
      state.events = { ...state.events, ...action.payload };
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { setSelectedDate, closeModal, setEvents, setLoading } = calendarSlice.actions;
export default calendarSlice.reducer;
