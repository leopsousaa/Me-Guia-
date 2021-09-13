import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { StatusBar } from "expo-status-bar";

import { RoundPixel } from "../../utils/roundPixel";

import { PALLET } from "../../globalStyles/palletColor";

import styles from "./styles";

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          source={require("../../../assets/icons/hamburguer-menu.png")}
          resizeMode="contain"
          style={styles.Icon}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "BebasNeue-Regular",
          fontSize: 28,
          color: PALLET.light,
          top: RoundPixel(16),
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
          top: RoundPixel(16),
        }}
      />
    </View>
  );
};

export default Header;
