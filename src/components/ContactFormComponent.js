import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const ContactForm = ({ onSave, data, isEditable, newForm }) => {
  const [firstName, setFirstName] = useState(data ? data.firstName : "");
  const [lastName, setLastName] = useState(data ? data.lastName : "");
  const [email, setEmail] = useState(data ? data.email : "");
  const [primaryNumber, setPrimaryNumber] = useState(
    data ? data.primaryNumber : ""
  );
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={style.textStyle}>First Name</Text>
      <TextInput
        style={style.textInputStyle}
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
        editable={newForm || isEditable}
      ></TextInput>
      <Text style={style.textStyle}>Last Name</Text>
      <TextInput
        style={style.textInputStyle}
        onChangeText={(text) => setLastName(text)}
        value={lastName}
        editable={newForm || isEditable}
      ></TextInput>
      <Text style={style.textStyle}>Phone Number</Text>
      <TextInput
        style={style.textInputStyle}
        keyboardType={"phone-pad"}
        onChangeText={(text) => setPrimaryNumber(text)}
        value={primaryNumber}
        editable={newForm || isEditable}
      ></TextInput>
      <Text style={style.textStyle}>Email</Text>
      <TextInput
        style={style.textInputStyle}
        onChangeText={(text) => setEmail(text)}
        value={email}
        editable={newForm || isEditable}
      ></TextInput>
      {newForm || isEditable ? (
        <Pressable
          style={style.buttonStyle}
          onPress={() => {
            onSave({ firstName, lastName, primaryNumber, email, id: data?.id });
          }}
        >
          <Text style={style.buttonTextStyle}>Save</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    marginBottom: 10,
    marginHorizontal: "2%",
    width: "100%",
  },
  textInputStyle: {
    alignContent: "flex-start",
    marginHorizontal: "2%",
    marginBottom: "1%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    padding: 10,
    with: "100%",
  },
  buttonStyle: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginHorizontal: "30%",
    backgroundColor: "black",
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ContactForm;
