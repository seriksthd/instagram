import { configureStore } from "@reduxjs/toolkit";
import { tourReducer } from "./tour/tourSlice";

export const store = configureStore({
  reducer: {
    tours: tourReducer,
  },
});
