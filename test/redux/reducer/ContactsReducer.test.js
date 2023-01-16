import ContactsReducer from "../../../src/redux/reducers/ContactsReducer";
import * as actions from '../../../src/redux/actions/ActionTypes';

import { loadAllContacts, searchContact, addContact, updateContact } from "../../../src/redux/actions/ContactsActions";
import InitialState from "../../../src/redux/reducers/InitialState";

describe('contacts reducer', () => {
    it('should initial state', () => {
        expect(ContactsReducer({}, loadAllContacts())).toEqual(InitialState)
    });

    it('should search Contact', () => {
        const state = ContactsReducer({}, searchContact('Arnav'));
        expect(state.contacts.length).toEqual(1);
    });

    it('should search Contact', () => {
        const state = ContactsReducer({}, searchContact('Arnav'));
        expect(state.contacts.length).toEqual(1);
    });

    it('should add Contact', () => {
        const state = ContactsReducer({}, addContact({
            firstName: 'Ravi',
            lastName: 'Malhotra',
            email: 'ravi@gmail.com',
            primaryNumber: "+918080142761",
        }));
        expect(state.contacts.length).toEqual(1);
    });

    it('should update Contact firstName', () => {
        const state = ContactsReducer({contacts: [{
            id: 123,
            firstName: 'Ravi',
            lastName: 'Malhotra',
            email: 'ravi@gmail.com',
            primaryNumber: "+918080142761",
        }]}, updateContact({id: 123, firstName: 'RaviKishen',
        lastName: 'Malhotra',
        email: 'ravi@gmail.com',
        primaryNumber: "+918080142761",}));
        console.log('state', state);
        expect(state.contacts[0].firstName).toEqual('RaviKishen');
    });
})
