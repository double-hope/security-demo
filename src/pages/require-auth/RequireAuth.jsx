import { useAuth } from 'hooks/useAuth';
import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuthPage = ({ allowedRoles, allow }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        allow
        // auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.accessToken
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuthPage;