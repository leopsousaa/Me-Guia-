import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { PALLET } from "../../globalStyles/palletColor";
import { shadow } from "../../globalStyles/shadow";

import { RoundPixel, widthDPI } from "../../utils/roundPixel";

const CardTip = ({ icon, title, description }) => {
  return (
    <View style={styles.cardContainer}>
      <Ionicons name={icon} style={styles.icon} size={36} />
      <View style={styles.cardTexts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: widthDPI(90),
    backgroundColor: PALLET.light,
    padding: RoundPixel(16),
    borderRadius: RoundPixel(16),
    marginBottom: RoundPixel(16),
    ...shadow.shadow,
  },
  icon: {
    color: PALLET.primaryColor,
  },
  title: {
    fontWeight: "bold",
    fontFamily: "BebasNeue-Regular",
    fontSize: RoundPixel(24),
    color: PALLET.primaryColor,
    borderEndWidth: RoundPixel(1),
    borderBottomWidth: RoundPixel(1),
  },
  text: {
    color: PALLET.secondColor,
    textTransform: "uppercase",
    fontWeight: "500",
  },
  cardTexts: {
    flex: 1,
    marginLeft: RoundPixel(16),
  },
});

export default CardTip;
