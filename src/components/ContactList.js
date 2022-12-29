import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const ContactList = ({ list, navigation }) => {

  const _onPress = (item) => {
    navigation.navigate('Details', {
      item
    });
  }

  return (
    <View style={styles.listView}>
      <FlatList
        keyExtractor={(data) => data.id}
        data={list}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => { _onPress(item)}}>
              <View style={styles.listItem}>
                <Text style={styles.listViewName}>{item.firstName + " " + item.lastName}</Text>
                <Text>{item.primaryNumber}</Text>
                <Text>{item.email}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
    listView: {
        marginHorizontal: '5%',
    },
    listItem: {
        marginHorizontal: '5%',
        marginBottom: 5
    },
    listViewName: {
      fontSize: 20
    }

})

export default withNavigation(ContactList);
