import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSeats: [],
};

const seatSlice = createSlice({
  name: "seat",
  initialState,
  reducers: {
    datGhe(state, action) {
      const index = state.selectedSeats.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.payload.soGhe
      );
      if (index !== -1) {
        state.selectedSeats.splice(index, 1);
      } else {
        state.selectedSeats.push(action.payload);
      }
    },
    xoaGhe(state, action) {
      state.selectedSeats = state.selectedSeats.filter(
        (seat) => seat.soGhe !== action.payload
      );
    },
    xoaTatCaGhe(state) {
      state.selectedSeats = [];
    },
  },
});

export const { datGhe, xoaGhe, xoaTatCaGhe } = seatSlice.actions;
export default seatSlice.reducer;
