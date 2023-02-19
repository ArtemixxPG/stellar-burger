import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../../pages/home/home";
import AppHeader from "../app-header/app-header";
import Login from "../../pages/auth/login/login";
import Register from "../../pages/auth/register/register";
import ForgotPassword from "../../pages/auth/forgot-password/forgot-password";
import ResetPassword from "../../pages/auth/reset-password/reset-password";
import Profile from "../../pages/profile/profile";

function App() {
    return (
        <>

            <BrowserRouter>
                <AppHeader/>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home/>}/>
                    </Route>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/forgot-password' element={<ForgotPassword/>}/>
                    <Route path='/reset-password' element={<ResetPassword/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;