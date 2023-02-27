import {useSelector} from "react-redux";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import {isUser} from "../../utils/utils";

const ProtectedRoute = ({element, isUnProtected = false}) => {

    const isLogIn = useSelector(store => store.user.isLogIn);

    const location = useLocation()


    if (isLogIn && isUnProtected) {
        return <Navigate to={location.state?.target || '/'} replace/>;
    }

    if (!isLogIn && !isUnProtected) {
        return <Navigate Navigate to='/login' state={{target: location}} replace/>;
    }


    return element
};

ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired
}


export default ProtectedRoute;