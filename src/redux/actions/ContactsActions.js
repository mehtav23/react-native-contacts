import * as actions from "./ActionTypes";

export const loadAllContacts = () => {
  return { type: actions.LOAD_ALL_CONTACTS };
};

export const searchContact = (str) => {
  return { type: actions.SEARCH_CONTACT, payload: str };
};

export const addContact = (data) => {
  return { type: actions.ADD_CONTACT, payload: data };
};

export const updateContact = (data) => {
  return { type: actions.UPDATE_CONTACT, payload: data };
};

export const deleteContact = (data) => {
  return { type: actions.DELETE_CONTACT, payload: data };
};
