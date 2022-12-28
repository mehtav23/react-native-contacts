import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactForm from '../components/ContactFormComponent';
import HeaderComponent from '../components/HeaderComponent';
import { MaterialIcons } from '@expo/vector-icons'; 


const ContactDetailScreen = ({navigation}) => {
    const item = navigation.getParam('item');
    
    return (
        <View>
            <HeaderComponent title={'Contact Details'}></HeaderComponent>
            <View style={styles.addNewIcon}>
            <MaterialIcons
                name="edit"
                size={24}
                color="black"
                onPress={() => navigation.navigate('Update', { contact: item})}  />
            </View>
            <ContactForm data={item} isEditable={false} />
        </View>
    );
}

const styles = StyleSheet.create({
    addNewIcon: {
        padding: 20,
        alignSelf: 'flex-end'
    }
});

export default ContactDetailScreen;