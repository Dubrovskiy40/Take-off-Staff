import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getContacts} from "../../actions/contactsAction";
import ContactsItem from "../ContactsItem/ContactsItem";
import style from './contactsList.module.css';
import {RootState} from "../../store";

const ContactsList: React.FC = () => {
    const contacts = useSelector((state: RootState) => state.contacts);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("https://reqres.in/api/users?per_page=12/")
            .then((response) => response.json())
            .then((data) => dispatch(getContacts(data.data)));
    }, []);

    return (
        <div className={style.contacts}>
            {
                contacts?.map((contact) => <ContactsItem key={contact.id} contact={contact} />)
            }
        </div>
    );
};

export default ContactsList;