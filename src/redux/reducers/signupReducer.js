import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    snackbarMessage: "",
    severity:'',
};
 const signupSlice = createSlice({
    initialState,
    reducers:{},
    name:'signup',
    extraReducers: (builder) => {
        builder
        .addCase(
            'SET_SNACKBAR_MESSAGE',(state, action) => {
                state.snackbarMessage = action.payload.message;
                state.color = action.payload.color;
                }
        )
   .addCase(
    'SIGNUP_REQUEST',(state) => {
        state.loading = true;
      })
      .addCase(
      'SIGNUP_SUCCESS', (state) => {
        state.loading = false;
        
      })
      .addCase(
      'SIGNUP_FAILURE' ,(state) => {
        state.loading = false;  
      })
    }
});

export default signupSlice.reducer;