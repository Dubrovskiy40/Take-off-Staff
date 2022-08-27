import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contactsReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    user: userReducer,
    auth: authReducer
});

const store = createStore(rootReducer, composeWithDevTools());

type RootReducer = typeof rootReducer

export type RootState = ReturnType<RootReducer>

export default store;