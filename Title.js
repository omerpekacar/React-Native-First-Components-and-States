import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Title = () => {
  return (
    <>
    <View>
      <Text style={titleStyles.title}>Title Sayfama ait components</Text>
    </View>
    </>
  );
};

const titleStyles = StyleSheet.create({
  title: {
    fontSize: 13,
    fontWeight: "700",
  },
});

export default Title;
