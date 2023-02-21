import React from 'react';
import {useSelector} from "react-redux";

const useAuth = () => {

    const user = useSelector(store => store.user.user);

    return user
};

export default useAuth;