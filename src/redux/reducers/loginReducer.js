import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbarMessage: "",
  endColor:'',
  startColor:'',
  isNavigateOrganization:false,
};
const loginSlice = createSlice({
  initialState,
  reducers: {},
  name: "login",
  extraReducers: (builder) => {
    builder
      .addCase("SET_SNACKBAR_MESSAGE", (state, action) => {
        state.snackbarMessage = action.payload.message;
        state.endColor = action.payload.endColor;
        state.startColor=action.payload.startColor;
      })
      .addCase("SET_NAVIGATE_ORGANIZATION", (state, action) => {
        state.isNavigateOrganization = action.payload;
        });
      
  },
});

export default loginSlice.reducer;
