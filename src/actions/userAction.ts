import {
    GET_USER,
    DELETE_USER
} from "../store/types/userTypes";

export type ActionsTypes = GetUserActionType | DeleteUserActionType

export interface IUser {
    email: string,
    password: string
}

export type GetUserActionType = {
    type: typeof GET_USER
    payload: IUser
};

export const getUser = (user: IUser): GetUserActionType => ({
    type: GET_USER,
    payload: user,
});

export type DeleteUserActionType = {
    type: typeof DELETE_USER
    payload: IUser
};

export const deleteUser = (user: IUser): DeleteUserActionType => ({
    type: DELETE_USER,
    payload: user,
});