import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    snackbarMessage: "",
    startColor:'',
    endColor:'',
};
 const signupSlice = createSlice({
    initialState,
    reducers:{},
    name:'signup',
    extraReducers: (builder) => {
        builder
        .addCase("SET_SNACKBAR_MESSAGE", (state, action) => {
          // console.log(action.payload.color);
          state.snackbarMessage = action.payload.message;
          state.endColor = action.payload.endColor;
          state.startColor=action.payload.startColor;
        })
  //  .addCase(
  //   'SIGNUP_REQUEST',(state) => {
  //       state.loading = true;
  //     })
  //     .addCase(
  //     'SIGNUP_SUCCESS', (state) => {
  //       state.loading = false;
        
  //     })
  //     .addCase(
  //     'SIGNUP_FAILURE' ,(state) => {
  //       state.loading = false;  
  //     })
    }
});

export default signupSlice.reducer;