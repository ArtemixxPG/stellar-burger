import {Navigate, useLocation} from "react-router-dom";
import {ReactElement} from "react";
import {useSelector} from "../../custom-hooks/redux/selectors/use-selectors";
import MainPreloader from "../preloader/main-preloader/main-preloader";

interface IProtectedRoute {
    element: ReactElement
    isUnProtected?: boolean
}

const ProtectedRoute = ({element, isUnProtected = false}: IProtectedRoute) => {

    const {userSelector} = useSelector()

    const {isLogIn, hasLoading} = userSelector

    const location = useLocation()


    if(hasLoading) return <MainPreloader/>

    if (isLogIn && isUnProtected && !hasLoading) {
        return <Navigate to={location.state?.target || '/'} replace/>;
    }

    if (!isLogIn && !isUnProtected && !hasLoading) {
        return <Navigate to='/login' state={{target: location}} replace/>;
    }


    return element
};



export default ProtectedRoute;