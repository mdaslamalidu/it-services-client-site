import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Login from '../components/Login/Login';
import { AuthContext } from '../Context/UseContext';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return <div>Loading.....</div>
    }

    if(user?.uid){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;