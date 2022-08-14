import {
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACTS,
    SEARCH_CONTACT,
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

        case SEARCH_CONTACT:
            if (payload) {
                console.log([...JSON.parse(JSON.stringify(state))])
                return [...JSON.parse(JSON.stringify(state))].filter((el) => el.first_name.includes(payload) || el.last_name.includes(payload) || el.email.includes(payload))
            } else  {return state}

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