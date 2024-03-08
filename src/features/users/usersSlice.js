import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../api/endpoints";
import { certificateCourse } from "../../api/endpoints";

export const fetchLogin = createAsyncThunk(
  "user/login",
  async (credentials) => {
    const response = await login(credentials);
    return response;
  }
);

export const fetchCertificate = createAsyncThunk(
  "userSlice/certificate",
  async (data) => {
    const response = await certificateCourse(data);
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = {};
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCertificate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCertificate.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchCertificate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
export const { logout } = userSlice.actions;
