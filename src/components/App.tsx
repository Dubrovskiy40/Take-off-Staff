import React from 'react';
import './App.css';
import AppRouter from "./AppRouter/AppRouter";
import {BrowserRouter} from "react-router-dom";
import Header from "./Header/Header";

function App() {

    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header />
                <main className='content'>
                    <AppRouter />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
