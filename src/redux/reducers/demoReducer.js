import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    snackbarMessage: "",
    severity:'',
};
 const demoSlice = createSlice({
    initialState,
    reducers:{},
    name:'demo',
    extraReducers: (builder) => {
        builder
        .addCase(
            'SET_SNACKBAR_MESSAGE',(state, action) => {
                state.snackbarMessage = action.payload.message;
                state.severity = action.payload.severity;
                }
        )
   .addCase(
    'SUBSCRIBE_REQUEST',(state) => {
        state.loading = true;
      })
      .addCase(
      'SUBSCRIBE_SUCCESS', (state) => {
        state.loading = false;
        
      })
      .addCase(
      'SUBSCRIBE_FAILURE' ,(state) => {
        state.loading = false;  
      })
    }
});

export default demoSlice.reducer;