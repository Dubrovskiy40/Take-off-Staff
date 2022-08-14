import {
    GET_USER,
    DELETE_USER
} from "../store/types/userTypes";
import {InitialStateContactsReducerArrayType} from "../store/contactsReducer";

export type ActionsTypes = GetUserActionType | DeleteUserActionType

export type GetUserActionType = {
    type: typeof GET_USER
    payload: string
};

export const getUser = (user: string): GetUserActionType => ({
    type: GET_USER,
    payload: user,
});

export type DeleteUserActionType = {
    type: typeof DELETE_USER
    payload: string
};

export const deleteUser = (user: string): DeleteUserActionType => ({
    type: DELETE_USER,
    payload: user,
});