import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flight: [],
  isGetted: false,
  error: null,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    fetchFlightSuccess: (state, action) => {
      state.flight = action.payload;
      state.isGetted = true;
    },
    setNotGetted: (state) => {
      state.isGetted = false;
      state.flight = [];  // Сбрасываем детали предложения
    }
  },
});

export const { fetchFlightSuccess, setNotGetted } =
  flightSlice.actions;

export default flightSlice;
