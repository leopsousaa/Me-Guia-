import React from "react";
import { View, Text, StyleSheet } from "react-native";

// import { Container } from './styles';

const guides = () => {
  return (
    <View style={styles.view}>
      <Text>GuideScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#cc5",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default guides;
