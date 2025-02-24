import { createSlice } from '@reduxjs/toolkit';
// import defaultImg from '../../assets/icons/ProfilePictureIcon.svg'
const initialState = {
   loading:false,
};
 const loaderSlice = createSlice({
    initialState,
    reducers:{},
    name:'loader',
    extraReducers: (builder) => {
        builder
        .addCase(
            'SET_LOADER',(state, action) => {
                state.loading=action.payload;
                }
        )
    }
});

export default loaderSlice.reducer;