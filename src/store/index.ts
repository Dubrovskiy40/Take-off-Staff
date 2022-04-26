import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./contactsReducer";

const rootReducer = combineReducers({
    contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

type RootReducer = typeof rootReducer

export type RootState = ReturnType<RootReducer>

export default store;