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
        // console.log(action.payload.color);
        state.snackbarMessage = action.payload.message;
        state.endColor = action.payload.endColor;
        state.startColor=action.payload.startColor;
      })
      .addCase("SET_NAVIGATE_ORGANIZATION", (state, action) => {
        console.log(action.payload);      
        state.isNavigateOrganization = action.payload;
        });
      // .addCase("SET_LOGIN_DATA",(state,action)=>{
      //   state.data=action.payload;
      //   localStorage.setItem("token",action.payload.token);
      // })
      // .addCase("LOGIN")
      // .addCase("LOGIN_REQUEST", (state) => {
      //   state.loading = true;
      // })
      // .addCase("LOGIN_SUCCESS", (state) => {
      //   state.loading = false;
      // })
      // .addCase("LOGIN_FAILURE", (state) => {
      //   state.loading = false;
      // });
  },
});

export default loginSlice.reducer;
