import React from 'react';
import { View, Text, StyleSheet, PixelRatio } from 'react-native';
import ContactForm from '../components/ContactFormComponent';
import HeaderComponent from '../components/HeaderComponent';
import { MaterialIcons } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';


const ContactDetailScreen = ({navigation}) => {
    const item = navigation.getParam('item');
    
    return (
        <ScrollView>
            <View>
                <HeaderComponent title={'Contact Details'}></HeaderComponent>
                <View style={styles.addNewIcon}>
                <MaterialIcons
                    name="edit"
                    size={24 * PixelRatio.getFontScale()}
                    color="black"
                    onPress={() => navigation.navigate('Update', { contact: item})}  />
                </View>
                <ContactForm data={item} isEditable={false} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    addNewIcon: {
        padding: 20,
        alignSelf: 'flex-end'
    }
});

export default ContactDetailScreen;