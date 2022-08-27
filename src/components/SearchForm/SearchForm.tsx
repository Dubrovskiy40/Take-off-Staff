import React, {useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getContacts, searchContact} from "../../actions/contactsAction";
import {RootState} from "../../store";
import {TextField} from "@mui/material";

const SearchForm: React.FC = () => {
    const [text, setText] = useState('');
    const [contactsPrev, setContactsPrev] = useState([]);
    const contacts = useSelector((state: RootState) => state.contacts);
    console.log('contacts',contacts)
    const dispatch = useDispatch();

    const findContact = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);

        if (text) {
            dispatch(searchContact(text));
        }
    };

    useEffect(() => {
        if (!text && contactsPrev) {
            dispatch(getContacts(contactsPrev));
        }
    }, [text]);


    return (
        <TextField
            type="text"
            value={text}
            onChange={findContact}
            label="Поиск контакта"
            variant="outlined"
        />
    );
};

export default SearchForm;