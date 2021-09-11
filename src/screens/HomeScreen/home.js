import React from "react";
import { View, Text, StyleSheet } from "react-native";

// import { Container } from './styles';

const home = () => {
  return (
    <View style={styles.view}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#b55",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default home;
