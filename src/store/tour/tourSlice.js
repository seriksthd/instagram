import { createSlice } from "@reduxjs/toolkit";
import { getAllTours } from "./tourThunk";

export const tourSlice = createSlice({
  name: "tours",
  initialState: {
    tours: [],
    isLoading: false,
    isError:''
  },
  reducers: {
    // addTour: (state, action) => {
    //   state.tours.push(action.payload);
    // },
    // deleteTour: (state, action) => {
    //   state.tours = state.tours.filter((tour) => tour.id !== action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTours.fulfilled, (state, action) => {
        state.tours = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllTours.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTours.rejected, (state) => {
        state.isLoading = false;
        state.isError='error'
      });
  },
});
export const { addTour, deleteTour } = tourSlice.actions;
export const tourReducer = tourSlice.reducer;
