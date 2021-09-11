import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { RoundPixel } from "../../utils/roundPixel";

import { PALLET } from "../../globalStyles/palletColor";

const Header = () => {
  let [fontsLoaded] = useFonts({
    "BebasNeue-Regular": require("../../../assets/fonts/BebasNeue-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.header}>
        <StatusBar translucent barStyle="dark-content" />
        <Text
          style={{
            fontFamily: "BebasNeue-Regular",
            fontSize: 28,
            textAlign: "center",
            color: PALLET.light,
          }}
        >
          Me Guiaê
        </Text>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    height: RoundPixel(56) + RoundPixel(Constants.statusBarHeight),
    backgroundColor: PALLET.primaryColor,
    justifyContent: "center",
  },
});
export default Header;
