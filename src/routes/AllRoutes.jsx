import {Route,Routes} from 'react-router-dom';
import { Signup } from '../login_signup/signup/Signup';
import Login from '../login_signup/login/Login';
import { ForgotPassword } from '../login_signup/forget_password/forgotPassword/ForgotPassword';
import { CheckEmail } from '../login_signup/forget_password/checkEmail/CheckEmail';
import { SetNewPassword } from '../login_signup/forget_password/setNewPassword/SetNewPassword';
import { Verification } from '../login_signup/verification/Verification';
import { OrganizationDetail } from '../login_signup/organizationDetail/OrganizationDetail';
import PrivateRoute from './PrivateRoute';
import { useState } from 'react';
export const AllRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token") // Example: Check if token exists
  );
  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/forgotPassword' element={<ForgotPassword/>}/>
    <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
    <Route path='/checkEmail' element={<CheckEmail/>}/>
    <Route path='/setPassword' element={<SetNewPassword/>}/>
    <Route path='/verifyEmail' element={<Verification/>}/>
    <Route path='/organizationDetail' element={<OrganizationDetail/>}/>
    </Route>
   </Routes>
  )
}
