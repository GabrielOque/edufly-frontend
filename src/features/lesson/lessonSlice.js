import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLessons } from "../../api/endpoints";

export const fetchLesson = createAsyncThunk(
  "lessonSlice/fetchLesson",
  async (id) => {
    const response = await getLessons(id);
    return response;
  }
);

const lessonSlice = createSlice({
  name: "lesson",
  initialState: {
    lessons: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLesson.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLesson.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lessons = action.payload;
      })
      .addCase(fetchLesson.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default lessonSlice.reducer;
