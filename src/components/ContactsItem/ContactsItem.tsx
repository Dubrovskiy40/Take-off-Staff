import React, {useState} from 'react';
import style from './contactsItem.module.css';
import {useDispatch} from "react-redux";
import {deleteContact, updateContact} from "../../actions/contactsAction";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

type ObjectType = {
    id: number
    first_name: string
    last_name: string
    email: string
    avatar: string
}

interface IContactsItem {
    contact: ObjectType
}

const ContactsItem: React.FC<IContactsItem> = ({ contact }) => {
    const [newState, setNewState] = useState(contact);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };

    const handleChange = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateContact(newState));
    };

    return (
        <div className={style.contact}>
            <form onSubmit={handleChange}>
                <Avatar src={newState.avatar} alt="img" sx={{ width: 100, height: 100 }}/>
                <TextField
                    type="text"
                    name={'first_name'}
                    value={newState.first_name}
                    onChange={(e) => {
                        setNewState((prevState) => {
                            return {
                                ...prevState, first_name: e.target.value
                            }
                        })
                    }}
                    variant="standard"
                />
                <TextField
                    className={style.contact__inp}
                    type="text"
                    value={newState.last_name}
                    onChange={(e) => {
                        setNewState((prevState) => {
                            return {
                                ...prevState, last_name: e.target.value
                            }
                        })
                    }}
                    variant="standard"
                />
                <TextField
                    className={style.contact__inp}
                    type="email"
                    value={newState.email}
                    onChange={(e) => {
                        setNewState((prevState) => {
                            return {
                                ...prevState, email: e.target.value
                            }
                        })
                    }}
                    variant="standard"
                />
                <Box mt={1}>
                    <Button size="small" variant="outlined" onClick={handleDelete}>Удалить</Button>
                </Box>
                <Box mt={1}>
                    <Button size="small" variant="outlined" type="submit">Сохранить</Button>
                </Box>
            </form>
        </div>
    );
};

export default ContactsItem;