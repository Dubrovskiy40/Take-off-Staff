import React, { useContext } from 'react';
import { AuthContext } from "../HOC/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;