import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import {ReactElement} from "react";
import {userSelector} from "../../custom-hooks/redux/selectors/use-selectors";

interface IProtectedRoute {
    element: ReactElement
    isUnProtected?: boolean
}

const ProtectedRoute = ({element, isUnProtected = false}: IProtectedRoute) => {

    const isLogIn = userSelector.isLogIn

    const location = useLocation()


    if (isLogIn && isUnProtected) {
        return <Navigate to={location.state?.target || '/'} replace/>;
    }

    if (!isLogIn && !isUnProtected) {
        return <Navigate to='/login' state={{target: location}} replace/>;
    }


    return element
};

ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired
}


export default ProtectedRoute;