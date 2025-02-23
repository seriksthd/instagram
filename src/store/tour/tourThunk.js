import { createAsyncThunk } from "@reduxjs/toolkit";
import { axionsInstance } from "../../api/axionsinstance";

export const getAllTours = createAsyncThunk(
  "tours/getAllTours",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axionsInstance("/tours");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const postToursRequest = createAsyncThunk(
  "tours/postToursRequest",
  async (tourData, { rejectWithValue, dispatch }) => {
    try {
      await axionsInstance.post("/tours", tourData);
      dispatch(getAllTours());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteToursRequest = createAsyncThunk(
  "tours/deleteToursRequest",
  async (tourId, { rejectWithValue, dispatch }) => {
    try {
      await axionsInstance.delete("/tours/" + tourId);
      dispatch(getAllTours());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
