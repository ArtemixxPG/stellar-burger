import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../../pages/home/home";
import AppHeader from "../app-header/app-header";
import Login from "../../pages/auth/login/login";
import Register from "../../pages/auth/register/register";
import ForgotPassword from "../../pages/auth/forgot-password/forgot-password";
import ResetPassword from "../../pages/auth/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import useFetchList from "../../custom-hooks/use-fetch-list";
import MainPreloader from "../preloader/main-preloader/main-preloader";
import Info from "../../pages/ingredient/info";
import ModalIngredientInfo
    from "../burger-ingredient/burger-ingredients-item/modal-ingredient-info/modal-ingredient-info";
import ProtectedRoute from "../protected-route/protected-route";
import NotFound from "../../pages/not-found/not-found";
import OrderComplete from "../burger-constructor/burger-cunstructor-item/order-complete";
import useAuth from "../../custom-hooks/auth/use-auth";
import {useSelector} from "../../custom-hooks/redux/selectors/use-selectors";


const App = () => {

    const {userSelector} = useSelector()
    const hasLoading = userSelector.hasLoading
    useFetchList()

    useAuth()

    const location = useLocation();

    const background = location.state && location.state.background

    return (
        <>
            {hasLoading ? (<MainPreloader/>) :
                (
                    <>
                        <AppHeader/>
                        <Routes location={background || location}>
                            <Route index element={<Home/>}/>
                            <Route path='/login' element={<ProtectedRoute isUnProtected element={<Login/>}/>}/>
                            <Route path='/register' element={<ProtectedRoute isUnProtected element={<Register/>}/>}/>
                            <Route path='/forgot-password'
                                   element={<ProtectedRoute isUnProtected element={<ForgotPassword/>}/>}/>
                            <Route path='/reset-password'
                                   element={<ProtectedRoute isUnProtected element={<ResetPassword/>}/>}/>
                            <Route path='/profile' element={<ProtectedRoute element={<Profile/>}/>}/>
                            <Route path='ingredient/:id' element={<Info/>}/>
                            <Route path="*" element={<NotFound/>}/>

                        </Routes>

                        {background && (
                            <Routes>
                                <Route path='ingredient/:id' element={<ModalIngredientInfo/>}/>
                                <Route path='/order' element={<OrderComplete/>}/>
                            </Routes>
                        )}

                    </>
                )}
        </>
    );
}

export default App;