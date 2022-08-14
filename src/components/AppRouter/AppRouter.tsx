import React from 'react';
import {Routes, Route} from "react-router-dom";
import AuthProvider from "../HOC/AuthProvider";
import AuthPage from "../AuthPage/AuthPage";
import MainPage from "../MainPage/MainPage";
import RequireAuth from "../HOC/RequireAuth";

const AppRouter: React.FC = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/contacts" element={
                    <RequireAuth>
                        <MainPage />
                    </RequireAuth>
                } />
            </Routes>
        </AuthProvider>
    );
};

export default AppRouter;
