import React from 'react';
import { Navigate, useLocation  } from 'react-router-dom';
import {RootState} from "../../store";
import {useSelector} from "react-redux";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    let location = useLocation();
    const auth = useSelector((state: RootState) => state.auth);
    const user = useSelector((state: RootState) => state.user);

    if (auth.email !== user.email && auth.password !== user.password) {
        return <Navigate to="/AuthPage" state={{ from: location }} />;
    }

    return children;
};

export default ProtectedRoute;