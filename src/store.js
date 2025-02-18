import { configureStore } from "@reduxjs/toolkit";
import signupReducer from '../src/redux/reducers/signupReducer';
import loginReducer from '../src/redux/reducers/loginReducer';
import forgotPasswordReducer  from "../src/redux/reducers/forgotPasswordReducer";
import setNewPasswordReducer from "../src/redux/reducers/setNewPasswordReducer";
const store =configureStore({
    reducer:{
        signup:signupReducer,
        login:loginReducer,
        forgotPassword:forgotPasswordReducer,
        setNewPassword:setNewPasswordReducer,
    }
})

export default store;