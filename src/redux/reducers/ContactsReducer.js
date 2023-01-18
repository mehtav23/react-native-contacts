import * as ActionType from "../actions/ActionTypes";
import InitialState from "./InitialState";
import "react-native-get-random-values"; // added as UUID fails on IOS
import { v4 as uuidv4 } from "uuid";

const ContactsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ALL_CONTACTS:
      return { ...state, contacts: InitialState.contacts };
    case ActionType.SEARCH_CONTACT:
      const searchText = action.payload.toLowerCase();
      const matchingContacts = InitialState.contacts.filter((contact) => {
        const name = (contact.firstName + contact.lastName).toLowerCase();
        if (name.indexOf(searchText) != -1) {
          return contact;
        }
      });
      return { ...state, contacts: matchingContacts };
    case ActionType.ADD_CONTACT:
      let contacts = state.contacts ? state.contacts : [];
      const data = action.payload;
      data.id = uuidv4();
      contacts.push(data);
      contacts = contacts.sort((a, b) => {
        const result = a.firstName.localeCompare(b.firstName);

        return result !== 0 ? result : a.lastName.localeCompare(b.lastName);
      });
      return { ...state, contacts };

    case ActionType.UPDATE_CONTACT:
      let obj = state.contacts;
      let index = obj.findIndex((contact) => contact.id === action.payload.id);
      obj[index] = action.payload;
      return { ...state, obj };

    default:
      return state;
  }
};

export default ContactsReducer;
