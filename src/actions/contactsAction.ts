import {
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACTS,
    SEARCH_CONTACT,
    UPDATE_CONTACT,
} from "../store/types/contactsTypes";
import {InitialStateContactsReducerArrayType} from "../store/contactsReducer";

export type ActionsTypes = GetContactsActionType | DeleteContactActionType
    | AddContactActionType | SearchContactActionType | UpdateContactActionType

type GetContactsPayloadType = {
    id: number
    first_name: string
    last_name: string
    email: string
    avatar: string
};

export type GetContactsActionType = {
    type: typeof GET_CONTACTS
    payload: Array<GetContactsPayloadType>
};

export const getContacts = (contacts: Array<GetContactsPayloadType>): GetContactsActionType => ({
    type: GET_CONTACTS,
    payload: contacts,
});

export type DeleteContactActionType = {
    type: typeof DELETE_CONTACT
    payload: number
};

export const deleteContact = (contactId: number): DeleteContactActionType => ({
    type: DELETE_CONTACT,
    payload: contactId,
});

type AddContactPayloadType = {
    firstName: string
    lastName: string
    email: string
};

export type AddContactActionType = {
    type: typeof ADD_CONTACT
    payload: AddContactPayloadType
};

export const addContact = (firstName: string, lastName: string, email: string): AddContactActionType => {
    return {
        type: ADD_CONTACT,
        payload: {firstName: firstName, lastName: lastName, email: email},
    };
};

export type SearchContactActionType = {
    type: typeof SEARCH_CONTACT
    payload: string
};

export const searchContact = (value: string): SearchContactActionType => {
    return {
        type: SEARCH_CONTACT,
        payload: value
    };
};

type UpdateContactPayloadType = {
    id: number
    avatar: string
    first_name: string
    last_name: string
    email: string
};

export type UpdateContactActionType = {
    type: typeof UPDATE_CONTACT
    payload: UpdateContactPayloadType
};

export const updateContact = (contact: UpdateContactPayloadType): UpdateContactActionType => ({
    type: UPDATE_CONTACT,
    payload: contact
});
