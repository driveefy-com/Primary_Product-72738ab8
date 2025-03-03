import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbarMessage: "",
  endColor:'',
  startColor:'',
};
const forgotPasswordSlice = createSlice({
  initialState,
  reducers: {},
  name: "forgotPassword",
  extraReducers: (builder) => {
    builder
      .addCase("SET_SNACKBAR_MESSAGE", (state, action) => {
        state.snackbarMessage = action.payload.message;
        state.endColor = action.payload.endColor;
        state.startColor=action.payload.startColor;
      })
     
  },
});

export default forgotPasswordSlice.reducer;
