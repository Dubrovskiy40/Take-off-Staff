import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchContact} from "../../actions/contactsAction";
import {RootState} from "../../store";
import {TextField} from "@mui/material";

const SearchForm: React.FC = () => {
    const [text, setText] = useState("");
    const contacts = useSelector((state: RootState) => state.contacts);
    const dispatch = useDispatch();

    const findContact = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        if (text) {
            dispatch(searchContact(text));
        }
    };

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