import React, {useEffect} from 'react';
import useAuth from "../auth/use-auth";
import {useLocation, useNavigate} from "react-router-dom";
//TODO replace protected route element on useRedirect
const useRedirect = (type, path) => {

    const user = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (type === 'unprotected') {
            user.name ? navigate(path) : navigate(location.pathname)
        } else if (type === 'protected') {
            user? navigate(location.pathname) : navigate(path)
        }
    }, [user.name, location, navigate])
};

export default useRedirect;