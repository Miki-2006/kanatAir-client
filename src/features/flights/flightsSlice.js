import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flights: [],
  loading: false,
  error: null,
  isNotGetted: false,
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    fetchFlightsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchFlightsSuccess: (state, action) => {
      state.flights = action.payload;
      state.loading = false;
    },
    fetchFlightsFailure: (state, action) => {
      state.isGetted = true;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchFlightsFailure, fetchFlightsSuccess, fetchFlightsStart } =
  flightsSlice.actions;

export default flightsSlice;
