import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";

const ContactList = ({ list, navigation }) => {
  const goToDetails = (item) => {
    navigation.navigate("Details", {
      item,
    });
  };

  return (
    <View style={styles.listView}>
      <FlatList
        keyExtractor={(data) => data.id}
        data={list}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity testID={item.id}
              onPress={() => {
                goToDetails(item);
              }}
            >
              <View style={styles.listItem}>
                <Text style={styles.listViewName}>
                  {item.firstName + " " + item.lastName}
                </Text>
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
    marginHorizontal: "1%",
    marginBottom: "5%"
  },
  listItem: {
    marginHorizontal: "5%",
    marginBottom: '5%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  },
  listViewName: {
    fontSize: 20,
    paddingBottom: 10
  },
});

export default withNavigation(ContactList);
