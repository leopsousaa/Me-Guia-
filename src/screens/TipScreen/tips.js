import React from "react";
import { View, Text, StyleSheet } from "react-native";

// import { Container } from './styles';

const tips = () => {
  return (
    <View style={styles.view}>
      <Text>TipsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#a15",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default tips;
