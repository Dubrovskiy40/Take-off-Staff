import {
    GET_USER,
    DELETE_USER
} from "./types/userTypes";
import {ActionsTypes} from "../actions/userAction";

const initialState: string  = '';

const userReducer = (state = initialState, { type, payload }: ActionsTypes): string => {
    switch (type) {
        case GET_USER:
            return payload;

        case DELETE_USER:
            return '';

        default:
            return state;
    }
};

export default userReducer;