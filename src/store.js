import { configureStore } from "@reduxjs/toolkit";
import login_signup_Reducer from './redux/reducers/login_signup_Reducer'
import popUpReducer from './redux/reducers/popUpReducer'
import loaderReducer from './redux/reducers/loaderReducer'
const store =configureStore({
    reducer:{
        login_signup:login_signup_Reducer,
        popup:popUpReducer,
        loader:loaderReducer,
    }
})

export default store;