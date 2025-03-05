import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbarMessage: "",
  endColor: "",
  startColor: "",
  isNavigateOrganization: false,
};
const login_signup_Slice = createSlice({
  initialState,
  reducers: {},
  name: "login_signup",
  extraReducers: (builder) => {
    builder
      .addCase("SET_SNACKBAR_MESSAGE", (state, action) => {
        state.snackbarMessage = action.payload.message;
        state.endColor = action.payload.endColor;
        state.startColor = action.payload.startColor;
      })
      .addCase("SET_NAVIGATE_ORGANIZATION", (state, action) => {
        state.isNavigateOrganization = action.payload;
      })
      .addCase("SET_PASSWORD_REQUEST", (state) => {
        state.loading = true;
      })
      .addCase("SET_PASSWORD_SUCCESS", (state) => {
        state.loading = false;
      })
      .addCase("SET_PASSWORD_FAILURE", (state) => {
        state.loading = false;
      })
  },
});

export default login_signup_Slice.reducer;
