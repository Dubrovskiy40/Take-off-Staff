import React from 'react';
import style from './mainPage.module.css';
import ContactsList from "../ContactsList/ContactsList";
import SearchForm from "../SearchForm/SearchForm";
import useAuth from "../HOOK/useAuth";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MainPage: React.FC = () => {
    const {signOut}: any = useAuth();
    const navigate = useNavigate();
    const {user}: any = useAuth();

    return (
        <div className={style.mainPage}>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <SearchForm />
                <Alert
                    action={
                        <Button variant="contained" size="small" onClick={() => {signOut(() => navigate('/', {replace: true}))}}>
                            LogOutt
                        </Button>
                    }
                >
                    Вы зашли под пользователем: <b>{user ? user : 'вы не авторизованы'}</b>
                </Alert>
            </Stack>
            <ContactsList />
        </div>
    );
};

export default MainPage;
