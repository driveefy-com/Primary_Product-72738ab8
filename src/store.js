import { configureStore } from "@reduxjs/toolkit";
import signupReducer from '../src/redux/reducers/signupReducer';
import loginReducer from '../src/redux/reducers/loginReducer';
import forgotPasswordReducer  from "../src/redux/reducers/forgotPasswordReducer";
import setNewPasswordReducer from "../src/redux/reducers/setNewPasswordReducer";
import popUpReducer from './redux/reducers/popUpReducer'
import loaderReducer from './redux/reducers/loaderReducer'
const store =configureStore({
    reducer:{
        signup:signupReducer,
        login:loginReducer,
        forgotPassword:forgotPasswordReducer,
        setNewPassword:setNewPasswordReducer,
        popup:popUpReducer,
        loader:loaderReducer,
    }
})

export default store;