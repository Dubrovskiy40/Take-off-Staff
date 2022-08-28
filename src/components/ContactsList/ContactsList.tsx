import React from 'react';
import ContactsItem from "../ContactsItem/ContactsItem";
import style from './contactsList.module.css';
import {InitialStateContactsReducerArrayType} from "../../store/contactsReducer";

interface Props {
    filteredContacts: Array<InitialStateContactsReducerArrayType>
}

const ContactsList = ({ filteredContacts }: Props) => {

    return (
        <div className={style.contacts}>
            {
                filteredContacts?.map((contact) => <ContactsItem key={contact.id} contact={contact} />)
            }
        </div>
    );
};

export default ContactsList;