import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import { RoundPixel } from "../../utils/roundPixel";

import { PALLET } from "../../globalStyles/palletColor";

const Header = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    "BebasNeue-Regular": require("../../../assets/fonts/BebasNeue-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.header}>
        <StatusBar translucent barStyle="dark-content" />
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require("../../../assets/icons/hamburguer-menu.png")}
            resizeMode="contain"
            style={{
              width: RoundPixel(24),
              height: RoundPixel(24),
              left: RoundPixel(16),
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "BebasNeue-Regular",
            fontSize: 28,
            color: PALLET.light,
          }}
        >
          Me Guiaê
        </Text>
        <Image
          source={require("../../../assets/icons/hamburguer-menu.png")}
          resizeMode="contain"
          style={{
            width: RoundPixel(24),
            height: RoundPixel(24),
            right: RoundPixel(16),
          }}
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    height: RoundPixel(56) + RoundPixel(Constants.statusBarHeight),
    backgroundColor: PALLET.primaryColor,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default Header;
