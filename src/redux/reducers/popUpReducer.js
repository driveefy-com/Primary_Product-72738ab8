import { createSlice } from '@reduxjs/toolkit';
import defaultImg from '../../assets/icons/ProfilePictureIcon.svg'
const initialState = {
   img:defaultImg,
};
 const popUpSlice = createSlice({
    initialState,
    reducers:{},
    name:'popup',
    extraReducers: (builder) => {
        builder
        .addCase(
            'SET_PROFILE_PICTURE',(state, action) => {
                console.log(action.payload);
                state.img = action.payload;
                }
        )
    }
});

export default popUpSlice.reducer;