import {
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACTS,
    UPDATE_CONTACT,
} from "./types/contactsTypes";
import {ActionsTypes} from "../actions/contactsAction";

export type InitialStateContactsReducerArrayType = {
    id: number
    first_name: string
    last_name: string
    email: string
    avatar: string
};

const initialState: Array<InitialStateContactsReducerArrayType>  = [];

const contactsReducer = (state = initialState, { type, payload }: ActionsTypes): Array<InitialStateContactsReducerArrayType> => {
    switch (type) {
        case DELETE_CONTACT:
            return state.filter((el) => el.id !== payload);

        case ADD_CONTACT:
            if (payload.email && payload.firstName && payload.lastName) {
                return [{
                first_name: payload.firstName,
                last_name: payload.lastName,
                email: payload.email,
                id: state.length + 1,
                avatar: "https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-49.jpg"
            }, ...state]
            } else return [...state];

        case GET_CONTACTS:
            return [...payload];

        case UPDATE_CONTACT:
            return state.map((el: InitialStateContactsReducerArrayType) => {
                        if (el.id === payload.id) {
                            return payload
                        } else {
                            return el
                        }
                    });

        default:
            return state;
    }
};

export default contactsReducer;