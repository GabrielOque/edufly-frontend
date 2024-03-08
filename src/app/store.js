import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/users/usersSlice";
import lessonSlice from "../features/lesson/lessonSlice";
import commentSlice from "../features/comments/commentsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    lesson: lessonSlice,
    comments: commentSlice,
  },
});

export default store;
