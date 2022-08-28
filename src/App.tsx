import React from 'react';
import './App.css';
import AuthPage from "./components/AuthPage/AuthPage";
import MainPage from "./components/MainPage/MainPage";
import {Routes, Route, Navigate} from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <ProtectedRoute>
                    <Route path="/contacts" element={<MainPage />} />
                </ProtectedRoute>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App;
