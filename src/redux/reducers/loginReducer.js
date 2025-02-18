import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    snackbarMessage: "",
    severity:'',
};
 const loginSlice = createSlice({
    initialState,
    reducers:{},
    name:'login',
    extraReducers: (builder) => {
        builder
        .addCase(
            'SET_SNACKBAR_SUCCESS_MESSAGE',(state, action) => {
                state.snackbarMessage = action.payload.message;
                state.severity = action.payload.severity;
                }
        )
   .addCase(
    'LOGIN_REQUEST',(state) => {
        state.loading = true;
      })
      .addCase(
      'LOGIN_SUCCESS', (state) => {
        state.loading = false;
        
      })
      .addCase(
      'LOGIN_FAILURE' ,(state) => {
        state.loading = false;  
      })
      .addCase(
        'SET_SNACKBAR_ERROR_MESSAGE',(state, action) => {
          state.snackbarMessage = action.payload.message;
          state.severity = action.payload.severity;
        }
      )
    }
});

export default loginSlice.reducer;