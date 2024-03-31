import { configureStore } from "@reduxjs/toolkit";
import phimSlice from "./slice/phimSlice";
import loadingSlice from "./slice/loadingSlice";
import bookingSlice from "./slice/bookingSlice";

export const store = configureStore({
  reducer: {
    // hoTen: () => {
    //   return "CyberSoft";
    // },
    phimSlice,
    loadingSlice,
    bookingSlice,
    // huhuSlice
  },
});
