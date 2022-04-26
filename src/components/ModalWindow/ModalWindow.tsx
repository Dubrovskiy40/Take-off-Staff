import React from 'react';
import style from './modalWindow.module.css';
import {useDispatch} from "react-redux";
import {addContact} from "../../actions/contactsAction";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

interface IModalWindow {
    active: boolean
    setActive: (boolean: boolean) => void
}

const ModalWindow: React.FC<IModalWindow> = ({ active, setActive}) => {
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const form: any = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value
        dispatch(addContact(firstName, lastName, email));
        setActive(false);
        form.firstName.value = '';
        form.lastName.value = '';
        form.email.value = '';
    };

    return (
        <div className={active ? `${style.modal} ${style.active}` : `${style.modal}`} onClick={() => setActive(false)}>
            <div className={active ? `${style.modal__content} ${style.active}` : `${style.modal__content}`} onClick={e => e.stopPropagation()}>
                    <Box className={style.modal__form}
                        onSubmit={handleSubmit}
                        component="form"
                    >
                        <TextField name="firstName" label="Имя" variant="standard" />
                        <TextField name="lastName" label="Фамилия" variant="standard" />
                        <TextField name="email" label="Почта" variant="standard" />
                        <Box mt={2}>
                            <Button variant="contained" type="submit">Добавить контакт</Button>
                        </Box>
                    </Box>
            </div>
        </div>
    );
};

export default ModalWindow;