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
          state.snackbarMessage = action.payload.message;
          state.endColor = action.payload.endColor;
          state.startColor=action.payload.startColor;
        })
  
    }
});

export default signupSlice.reducer;