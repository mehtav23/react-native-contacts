import { combineReducers } from "redux";
import ContactsReducer from "./ContactsReducer";

const rootReducer = combineReducers({
    contacts: ContactsReducer
});

export default rootReducer;