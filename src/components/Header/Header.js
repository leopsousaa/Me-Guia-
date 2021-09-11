import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

import { RoundPixel } from "../../utils/roundPixel";

import { PALLET } from "../../globalStyles/palletColor";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <StatusBar translucent barStyle="dark-content" />
      <Text>Me Guiaê</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: RoundPixel(56) + RoundPixel(Constants.statusBarHeight),
    backgroundColor: PALLET.primaryColor,
  },
});
export default Header;
