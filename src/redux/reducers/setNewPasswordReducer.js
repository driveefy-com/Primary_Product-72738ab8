import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    snackbarMessage: "",
    severity:'',
};
 const setNewPasswordSlice = createSlice({
    initialState,
    reducers:{},
    name:'setNewPassword',
    extraReducers: (builder) => {
        builder
        .addCase(
            'SET_SNACKBAR_SUCCESS_MESSAGE',(state, action) => {
                state.snackbarMessage = action.payload.message;
                state.severity = action.payload.severity;
                }
        )
   .addCase(
    'SET_PASSWORD_REQUEST',(state) => {
        state.loading = true;
      })
      .addCase(
      'SET_PASSWORD_SUCCESS', (state) => {
        state.loading = false;
        
      })
      .addCase(
      'SET_PASSWORD_FAILURE' ,(state) => {
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

export default setNewPasswordSlice.reducer;