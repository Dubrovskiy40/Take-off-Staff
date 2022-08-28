import React, {useEffect, useState} from 'react';
import style from './mainPage.module.css';
import ContactsList from "../ContactsList/ContactsList";
import SearchForm from "../SearchForm/SearchForm";
import Button from "@mui/material/Button";
import ModalWindow from "../ModalWindow/ModalWindow";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {useDispatch, useSelector} from "react-redux";
import {deleteUser} from "../../actions/userAction";
import {RootState} from "../../store";
import {getContacts} from "../../actions/contactsAction";
import {InitialStateContactsReducerArrayType} from "../../store/contactsReducer";

const MainPage: React.FC = () => {
    const contactRedux = useSelector((state: RootState) => state.contacts);
    console.log('contactRedux',contactRedux)
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const [contacts, setContacts] = useState(contactRedux);

    useEffect(() => {
        fetch("https://reqres.in/api/users?per_page=12/")
            .then((response) => response.json())
            .then((data) => dispatch(getContacts(data.data)))
    }, []);

    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const handleDeleteUser = () => {
        dispatch(deleteUser({
            email: '',
            password: ''
        }));
    };

    const addContact = () => {
        setModalActive(true)
    };

    const filteredContacts: Array<InitialStateContactsReducerArrayType> = contacts?.filter((contact) => {
        return contact.first_name.includes(searchValue) || contact.last_name.includes(searchValue) || contact.email.includes(searchValue)
    })

    return (
        <div className={style.mainPage}>
            <Stack spacing={2} sx={{mb: 2}} direction="row">
                <Button onClick={addContact} variant="contained">Добавить контакт</Button>
            </Stack>
            <Stack sx={{ width: '100%' }} spacing={2}>
                <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
                <Alert
                    action={
                        <Button variant="contained" size="small" onClick={handleDeleteUser}>
                            LogOutt
                        </Button>
                    }
                >
                    Вы зашли под пользователем: <b>{user.email ? `${user.email}` : 'вы не авторизованы'}</b>
                </Alert>
            </Stack>
            <ContactsList filteredContacts={filteredContacts} />
            <ModalWindow active={modalActive} setActive={setModalActive}/>
        </div>
    );
};

export default MainPage;
