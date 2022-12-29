import React, { useEffect } from "react";
import { View, StyleSheet, TextInput, Text, PixelRatio } from "react-native";
import { connect } from "react-redux";
import ContactList from "../components/ContactList";
import HeaderComponent from "../components/HeaderComponent";
import {
  loadAllContacts,
  searchContact,
} from "../redux/actions/ContactsActions";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = ({
  contacts,
  onChangeText,
  loadAllContacts,
  navigation,
}) => {
  useEffect(() => {
    loadAllContacts();
  }, []);
  return (
    <ScrollView>
      <View>
        <HeaderComponent title="Contacts"></HeaderComponent>
        <View style={styles.addNewIcon}>
          <Ionicons
            name="person-add"
            size={40 * PixelRatio.getFontScale()}
            color="black"
            onPress={() => navigation.navigate("AddNew")}
          />
        </View>
        <View>
          <TextInput
            autoCapitalize={false}
            autoCorrect={false}
            style={styles.textInputStyle}
            placeholder="Search"
            onChangeText={(text) => onChangeText(text)}
          ></TextInput>
        </View>
        <ContactList list={contacts.contacts}></ContactList>
      </View>
    </ScrollView>
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
    padding: 20,
    alignSelf: "flex-end",
  },
});
const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllContacts: () => dispatch(loadAllContacts()),
    onChangeText: (text) => {
      dispatch(searchContact(text));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
