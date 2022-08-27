import React, {useState} from 'react';
import style from './mainPage.module.css';
import ContactsList from "../ContactsList/ContactsList";
import SearchForm from "../SearchForm/SearchForm";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {useDispatch} from "react-redux";
import {deleteUser} from "../../actions/userAction";
import ModalWindow from "../ModalWindow/ModalWindow";

const MainPage: React.FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);

    const dispatch = useDispatch();

    const handleDeleteUser = () => {
        dispatch(deleteUser({
            email: '',
            password: ''
        }));
        location.pathname = '/';
    };

    const addContact = () => {
        if (location.pathname === '/contacts') {
            setModalActive(true)
        } else {
            console.log('user not login')
        }
    };

    return (
        <div className={style.mainPage}>
            <Stack spacing={2} sx={{mb: 2}} direction="row">
                <Button onClick={addContact} variant="contained">Добавить контакт</Button>
            </Stack>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <SearchForm />
                <Alert
                    action={
                        <Button variant="contained" size="small" onClick={handleDeleteUser}>
                            LogOutt
                        </Button>
                    }
                >
                    Вы зашли под пользователем: <b>{'вы не авторизованы'}</b>
                </Alert>
            </Stack>
            <ContactsList />
            <ModalWindow active={modalActive} setActive={setModalActive}/>
        </div>
    );
};

export default MainPage;
