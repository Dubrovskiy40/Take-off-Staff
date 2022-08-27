import React, {useState} from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./AuthPage/AuthPage";
import MainPage from "./MainPage/MainPage";

function App() {
    const [token, setToken] = useState(false);

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={token ? <Navigate to="/contacts" replace /> : <AuthPage setToken={setToken} />}
                />
                <Route path="/contacts" element={<MainPage/>}/>
            </Routes>
        </>
    );
}

export default App;
