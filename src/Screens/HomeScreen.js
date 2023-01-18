import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import ContactList from "../components/ContactList";
import HeaderComponent from "../components/HeaderComponent";
import {
  loadAllContacts,
  searchContact,
} from "../redux/actions/ContactsActions";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = ({
  navigation,
}) => {
  const contacts = useSelector( state => state.contacts); 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllContacts());
  }, []);
  return (
    <>
      <ScrollView>
        <View>
          <HeaderComponent title="Contacts"></HeaderComponent>
          <View>
            <TextInput
              autoCapitalize={false}
              autoCorrect={false}
              style={styles.textInputStyle}
              placeholder="Search"
              onChangeText={(text) => dispatch(searchContact(text))}
            ></TextInput>
          </View>
          <ContactList list={contacts.contacts}></ContactList>
        </View>
      </ScrollView>
      <View style={styles.addNewIcon}>
        <MaterialIcons
          name="person-add"
          size={40}
          color="black"
          onPress={() => navigation.navigate("AddNew")}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  textInputStyle: {
    alignContent: "flex-start",
    marginHorizontal: "2%",
    marginTop: "10%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 10,
    marginBottom: 30,
  },
  addNewIcon: {
    padding: 10,
    position: "absolute",
    top: "85%",
    left: "75%",
    backgroundColor: "grey",
    borderRadius: 50,
  },
});

export default HomeScreen;
