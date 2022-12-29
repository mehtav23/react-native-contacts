import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import ContactForm from '../components/ContactFormComponent';
import HeaderComponent from "../components/HeaderComponent";
import { addContact } from '../redux/actions/ContactsActions';

const AddNewScreen = ({navigation}) => {
    const dispatch = useDispatch();
    
    return (
        <ScrollView>
        <View>
            <HeaderComponent title='Add New Contact'></HeaderComponent>
            <View style={styles.formContainer}>
                <ContactForm 
                    onSave={(data) => {
                        dispatch(addContact(data))
                        navigation.navigate('Home');
                    }}
                    newForm={true}>
                    
                </ContactForm>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        marginTop: '10%',
    }
})

export default AddNewScreen;