// seatSlice.js
import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "seat",
  initialState: {
    selectedSeats: [],
  },
  reducers: {
    datGhe: (state, action) => {
      const index = state.selectedSeats.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.payload.soGhe
      );
      if (index !== -1) {
        state.selectedSeats.splice(index, 1);
      } else {
        state.selectedSeats.push(action.payload);
      }
    },
    xoaGhe: (state, action) => {
      state.selectedSeats = state.selectedSeats.filter(
        (seat) => seat.soGhe !== action.payload
      );
    },
    xoaTatCaGhe: (state) => {
      state.selectedSeats = [];
    },
  },
});

export const { datGhe, xoaGhe, xoaTatCaGhe } = bookingSlice.actions;
export default bookingSlice.reducer;
