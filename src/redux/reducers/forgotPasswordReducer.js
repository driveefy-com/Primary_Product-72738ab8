import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    snackbarMessage: "",
    severity:'',
};
 const forgotPasswordSlice = createSlice({
    initialState,
    reducers:{},
    name:'forgotPassword',
    extraReducers: (builder) => {
        builder
        .addCase(
            'SET_SNACKBAR_SUCCESS_MESSAGE',(state, action) => {
                state.snackbarMessage = action.payload.message;
                state.severity = action.payload.severity;
                }
        )
   .addCase(
    'FORGOT_PASSWORD_REQUEST',(state) => {
        state.loading = true;
      })
      .addCase(
      'FORGOT_PASSWORD_SUCCESS', (state) => {
        state.loading = false;
        
      })
      .addCase(
      'FORGOT_PASSWORD_FAILURE' ,(state) => {
        state.loading = false;  
      })
      .addCase(
        'SET_SNACKBAR_ERROR_MESSAGE',(state, action) => {
          state.snackbarMessage = action.payload.message;
          state.severity = action.payload.severity
        }
      )
    }
});

export default forgotPasswordSlice.reducer;