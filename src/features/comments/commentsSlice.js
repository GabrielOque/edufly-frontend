import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createComment, getComments } from "../../api/endpoints";

export const fetchComments = createAsyncThunk(
  "commentsSlice/fetchComments",
  async (comment) => {
    const response = await createComment(comment);
    return response;
  }
);

export const getCommentsByLesson = createAsyncThunk(
  "commentsSlice/getCommentsByLesson",
  async (id) => {
    const response = await getComments(id);
    return response;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = [action.payload, ...state.comments];
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getCommentsByLesson.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCommentsByLesson.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = action.payload;
      })
      .addCase(getCommentsByLesson.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;
