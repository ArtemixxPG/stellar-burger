import {useSelector} from "react-redux";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import {FC, ReactElement} from "react";
import {TStore} from "../../services/reducers/root/root-reducer";

interface IProtectedRoute {
    element: ReactElement
    isUnProtected?: boolean
}

const ProtectedRoute:FC<IProtectedRoute> = ({element, isUnProtected = false}) => {

    const isLogIn = useSelector((store:TStore) => store.user.isLogIn);

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