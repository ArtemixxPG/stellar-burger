import {useSelector} from "react-redux";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import {isUser} from "../../utils/utils";

const ProtectedRoute = ({element, isUnProtected = false}) => {

    const user = useSelector(store => store.user.user);

    const location = useLocation()

    const find = isUser(user)

    if(isUser(user) && isUnProtected)
    {
        return <Navigate to= {location.state?.target || '/'} replace/>;
    }

    if(!isUser(user) && !isUnProtected)
    {
        return <Navigate Navigate to='/login' state={{ target: location}} replace/>;
    }


    return element
};

ProtectedRoute.propTypes = {
    element: PropTypes.element.isRequired
}


export default ProtectedRoute;