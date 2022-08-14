import React, {useEffect, useState} from 'react';
import style from './modalWindow.module.css';
import {useDispatch} from "react-redux";
import {addContact} from "../../actions/contactsAction";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CmInput from "../CmInput/CmInput";

interface IModalWindow {
    active: boolean
    setActive: (boolean: boolean) => void
}

const ModalWindow: React.FC<IModalWindow> = ({ active, setActive}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (firstName && lastName && email) {
            dispatch(addContact(firstName, lastName, email));
            setActive(false);

            setFirstName('');
            setLastName('');
            setEmail('');
        }
    };

    const onChangeInput = (value: string , name: string) => {
        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
        }
    };

    useEffect(() => {
        let dataForm = firstName && lastName && email;

        if(dataForm) {
            console.log('отправка данных формы', firstName, lastName, email);
        }

    }, [firstName, lastName, lastName])

    return (
        <div className={active ? `${style.modal} ${style.active}` : `${style.modal}`} onClick={() => setActive(false)}>
            <div className={active ? `${style.modal__content} ${style.active}` : `${style.modal__content}`} onClick={e => e.stopPropagation()}>
                    <Box className={style.modal__form}
                        onSubmit={handleSubmit}
                        component="form"
                    >
                        <CmInput label="Имя" id="firstName" name="firstName" value={firstName} onChange={onChangeInput} />
                        <CmInput label="Фамилия" id="lastName" name="lastName" value={lastName} onChange={onChangeInput} />
                        <CmInput label="Почта" id="email" name="email" value={email} onChange={onChangeInput} />
                        <Box mt={2}>
                            <Button variant="contained" type="submit">Добавить контакт</Button>
                        </Box>
                    </Box>
            </div>
        </div>
    );
};

export default ModalWindow;