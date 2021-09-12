import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

import { RoundPixel, widthDPI } from "../../utils/roundPixel";
import { PALLET } from "../../globalStyles/palletColor";
import { shadow } from "../../globalStyles/shadow";

const CardsContainer = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Card</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthDPI(90),
    height: RoundPixel(280),
    backgroundColor: PALLET.light,
    borderRadius: RoundPixel(16),
    marginTop: RoundPixel(20),
    ...shadow.shadow,
  },
});

export default CardsContainer;
