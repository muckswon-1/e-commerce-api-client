import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  clientLogin,
  clientLogout,
  getUserInfoById,
  registerClient,
} from "../../../utils/user/user";

export const userlogin = createAsyncThunk(
  "users/userLogin",
  async ({ username, password }) => {
    const response = await clientLogin(username, password);
    return response;
  },
);

export const userLogout = createAsyncThunk("users/userLogout", async () => {
  const response = await clientLogout();
  return response;
});

export const registerNewUser = createAsyncThunk(
  "users/registerNewUser",
  async ({ newUser }) => {
    const response = await registerClient(newUser);
    return response;
  },
);

export const fetchUserDetails = createAsyncThunk(
  "users/fetchUserDetails",
  async ({ userId }) => {
    const response = await getUserInfoById(userId);
    return response[0];
  },
);

const usersSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    user: null,
    userInfo: null,
    status: "idle",
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(userlogin.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(userlogin.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const result = action.payload;
        if (result) {
          state.isAuthenticated = true;
          state.user = { user: result.user, token: result.token };
          state.error = null;
        }
      })
      .addCase(userlogin.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(fetchUserDetails.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const result = action.payload;
        if (result) {
          state.userInfo = result;
          state.error = null;
        }
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(userLogout.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.status = "fulfilled";
        const result = action.payload;
        if (result) {
          state.isAuthenticated = false;
          state.user = null;
          state.userInfo = null;
          state.error = null;
        }
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.error = action.error.message;
      })

      .addCase(registerNewUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(registerNewUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        if (action.payload === true) {
          state.newUserRegistered = true;
        }
      })
      .addCase(registerNewUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUser = (state) => state.user.user;
export const selectUserDetails = (state) => state.user.userInfo;
export const selectUserStatus = (state) => state.user.status;
export const selectNewUserRegistered = (state) => state.newUserRegistered;

export default usersSlice.reducer;
