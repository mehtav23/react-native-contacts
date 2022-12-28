import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import ContactForm from '../components/ContactFormComponent';
import HeaderComponent from '../components/HeaderComponent';
import { updateContact } from '../redux/actions/ContactsActions';


const UpdateScreen = ({navigation}) => {
    const contact = navigation.getParam('contact');
    const dispatch = useDispatch();
    return (
        <View>
            <HeaderComponent title='Update Contact'></HeaderComponent>
            <ContactForm data={contact} isEditable={true} onSave={(contact) => {
                dispatch(updateContact(contact));
                navigation.navigate('Home');
            }}/>
        </View>
    );
}

const style = StyleSheet.create({

});

export default UpdateScreen;