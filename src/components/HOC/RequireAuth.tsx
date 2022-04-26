import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from "../HOOK/useAuth";

interface IRequireAuth {
    children: JSX.Element
}

const RequireAuth: React.FC<IRequireAuth> = ({ children }) => {
    const location = useLocation();
    const {user}:any = useAuth();
    // если user отсутствует, то будет переадресация
    if (!user) {
        return <Navigate to='/' state={{from: location}} />
    }

    return children
};

export default RequireAuth;