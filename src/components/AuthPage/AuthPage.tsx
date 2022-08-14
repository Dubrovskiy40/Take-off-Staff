import React, {useState} from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from "../HOOK/useAuth";
import style from './authPage.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {useDispatch} from "react-redux";
import {getUser} from "../../actions/userAction";

const AuthPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location: any =  useLocation();
    const {signIn}: any = useAuth();
    const fromPage = location.state?.from?.pathname || '/contacts';

    const [userName, setUserName] = useState('');
    const [isLogErr, setIsLogErr] = useState(false);

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();

        if (userName) {
            dispatch(getUser(userName));
            signIn(userName, () => navigate(fromPage, {replace: true}));
        } else {
            setIsLogErr(true);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    };

    return (
        <Box mt={5} className={style.authPage__wrap}>
            {
                isLogErr && (
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="error">Необходимо указать имя!</Alert>
                    </Stack>
            )}
            <form className={style.authPage} onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    name="username"
                    value={userName}
                    label="Введите ваше имя"
                    variant="standard"
                    onChange={handleChange}
                />
                <Box ml={3}>
                    <Button variant="contained" type="submit">Login</Button>
                </Box>
            </form>
        </Box>
    );
};

export default AuthPage;
