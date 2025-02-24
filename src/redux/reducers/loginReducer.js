import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbarMessage: "",
  severity: "",
};
const loginSlice = createSlice({
  initialState,
  reducers: {},
  name: "login",
  extraReducers: (builder) => {
    builder
      .addCase("SET_SNACKBAR_MESSAGE", (state, action) => {
        // console.log(action.payload.color);
        state.snackbarMessage = action.payload.message;
        state.endColor = action.payload.endColor;
        state.startColor=action.payload.startColor;
      })
      .addCase("LOGIN_REQUEST", (state) => {
        state.loading = true;
      })
      .addCase("LOGIN_SUCCESS", (state) => {
        state.loading = false;
      })
      .addCase("LOGIN_FAILURE", (state) => {
        state.loading = false;
      });
  },
});

export default loginSlice.reducer;
