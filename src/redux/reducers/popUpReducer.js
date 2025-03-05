import { createSlice } from "@reduxjs/toolkit";
import defaultImg from "../../assets/icons/ProfilePictureIcon.svg";
const initialState = {
  img: defaultImg,
  savedImage: defaultImg,
  isFirstUpload: true,
};
const popUpSlice = createSlice({
  initialState,
  reducers: {},
  name: "popup",
  extraReducers: (builder) => {
    builder
      .addCase("PREVIEW_PROFILE_PICTURE", (state, action) => {
        state.img = action.payload;
      })
      .addCase("SET_PROFILE_PICTURE", (state, action) => {
        state.savedImage = action.payload, state.isFirstUpload = false;
      });
  },
});

export default popUpSlice.reducer;
