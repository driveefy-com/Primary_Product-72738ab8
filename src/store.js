import { configureStore } from "@reduxjs/toolkit";
import login_signup_Reducer from './redux/reducers/login_signup_Reducer'
const store =configureStore({
    reducer:{
        login_signup:login_signup_Reducer,
    }
})

export default store;