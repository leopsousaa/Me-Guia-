import React from "react";
import { View, Text, StyleSheet } from "react-native";

// import { Container } from './styles';

const favorite = () => {
  return (
    <View style={styles.view}>
      <Text>FavoriteScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#e99996",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default favorite;
