import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HeaderComponent = ({ title }) => {
  return (
    <View style={styleSheet.layout}>
      <Text style={styleSheet.headerContent}>{title}</Text>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  layout: {
    height: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  headerContent: {
    fontSize: 35,
    padding:4
  },
});

export default HeaderComponent;
