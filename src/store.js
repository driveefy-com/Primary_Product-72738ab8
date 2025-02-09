import { configureStore } from "@reduxjs/toolkit";
import demoReducer from '../src/redux/reducers/demoReducer';
const store =configureStore({
    reducer:{
        demo:demoReducer,
    }
})

export default store;