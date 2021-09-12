import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

import { RoundPixel, widthDPI } from "../../utils/roundPixel";
import { memorize } from "../../utils/memorize";

import { PALLET } from "../../globalStyles/palletColor";
import { shadow } from "../../globalStyles/shadow";

const CardsContainer = () => {
  const [LayoutView, setLayoutView] = useState();

  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        var { x, y, width, height } = event.nativeEvent.layout;
        setLayoutView(width);
      }}
    >
      <View style={styles.row}>
        <Text style={styles.title}>Title Route</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textBtn}>Ver Guias</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowEnd}>
        <Text style={styles.Text}>Time</Text>
        <Text style={styles.Text}>km</Text>
        <Text style={styles.Text}>Avaliation</Text>
      </View>
    </View>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: widthDPI(90),
  },
  rowEnd: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: widthDPI(90),
    position: "absolute",
    bottom: RoundPixel(20),
    paddingLeft: RoundPixel(16),
    paddingRight: RoundPixel(16),
  },
  button: {
    paddingLeft: RoundPixel(12),
    paddingRight: RoundPixel(12),
    height: RoundPixel(36),
    right: RoundPixel(16),
    top: RoundPixel(16),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RoundPixel(16),
    backgroundColor: PALLET.primaryColor,
    ...shadow.shadow,
  },
  title: {
    fontSize: 20,
    paddingLeft: RoundPixel(16),
    top: RoundPixel(16),
    color: PALLET.secondColor,
  },
  textBtn: {
    color: PALLET.light,
    fontWeight: `bold`,
  },
  Text: {
    color: PALLET.secondColor,
    fontWeight: `bold`,
  },
});

export default CardsContainer;
