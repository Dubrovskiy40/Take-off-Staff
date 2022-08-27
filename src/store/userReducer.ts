import {
    GET_USER,
    DELETE_USER
} from "./types/userTypes";
import {ActionsTypes, IUser} from "../actions/userAction";

type InitialStateType = {
    email: string,
    password: string
};

const initialState: InitialStateType  = {
    email: '',
    password: ''
};

const userReducer = (state = initialState, { type, payload }: ActionsTypes): IUser => {
    switch (type) {
        case GET_USER:
            return payload;

        case DELETE_USER:
            return payload;

        default:
            return state;
    }
};

export default userReducer;