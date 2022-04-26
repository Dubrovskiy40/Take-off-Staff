import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from "../HOOK/useAuth";
import style from './authPage.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";

const AuthPage: React.FC = () => {
    const navigate = useNavigate();
    const location: any =  useLocation();
    const {signIn}: any = useAuth();
    const fromPage = location.state?.from?.pathname || '/contacts';

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        const form: any = e.target;
        const user = form.username.value;
        signIn(user, () => navigate(fromPage, {replace: true}));
    };

    return (
        <Box mt={5} className={style.authPage__wrap}>
            <form className={style.authPage} onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    name="username"
                    label="Введите ваше имя"
                    variant="standard"
                />
                <Box ml={3}>
                    <Button variant="contained" type="submit">Login</Button>
                </Box>
            </form>
        </Box>
    );
};

export default AuthPage;
