import {Route,Routes} from 'react-router-dom';
import { Signup } from '../login_signup/signup/Signup';
import Login from '../login_signup/login/Login';
import { ForgotPassword } from '../forget_password/forgotPassword/ForgotPassword';
import { CheckEmail } from '../forget_password/checkEmail/CheckEmail';
import { SetNewPassword } from '../forget_password/setNewPassword/SetNewPassword';
import { Verification } from '../verification/Verification';
import { OrganizationDetail } from '../organizationDetail/OrganizationDetail';
export const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/forgotPassword' element={<ForgotPassword/>}/>
    <Route path='/checkEmail' element={<CheckEmail/>}/>
    <Route path='/setPassword' element={<SetNewPassword/>}/>
    <Route path='/verifyEmail' element={<Verification/>}/>
    <Route path='/organizationDetail' element={<OrganizationDetail/>}/>
   </Routes>
  )
}
