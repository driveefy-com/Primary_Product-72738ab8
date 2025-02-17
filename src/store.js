import { configureStore } from "@reduxjs/toolkit";
import signupReducer from '../src/redux/reducers/signupReducer';
import loginReducer from '../src/redux/reducers/loginReducer';
const store =configureStore({
    reducer:{
        signup:signupReducer,
        login:loginReducer
    }
})

export default store;