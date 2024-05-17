import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {
    loading: false,
    isAuthenticated: false,
    user: null,
    message: '',
    error: ''
  },
  {
    registerRequest: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.error = ''; // Clear any previous error
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.message;
      state.message = ''; // Clear any previous message
    },
    clearError: (state) => {
      state.error = '';
    },
    clearMessage: (state) => {
      state.message = '';
    }
  }
);
