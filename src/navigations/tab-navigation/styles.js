import { StyleSheet, Platform } from "react-native";

import { RoundPixel } from "../../utils/roundPixel";
import { PALLET } from "../../globalStyles/palletColor";
import { shadow } from "../../globalStyles/shadow";

const styles = StyleSheet.create({
  ContainerCustomButtonMenu: {
    top: RoundPixel(-20),
    justifyContent: "center",
    alignItems: "center",
    ...shadow.shadow,
  },
  CustomButtonMenu: {
    width: RoundPixel(70),
    height: RoundPixel(70),
    borderRadius: RoundPixel(35),
    backgroundColor: PALLET.primaryColor,
    borderColor: PALLET.light,
    borderWidth: RoundPixel(2),
  },
  barStyle: {
    position: "absolute",
    bottom: RoundPixel(24),
    left: RoundPixel(20),
    right: RoundPixel(20),
    elevation: 0,
    backgroundColor: PALLET.light,
    borderRadius: RoundPixel(16),
    height: RoundPixel(80),
    ...shadow.shadow,
  },
  ContainerBarIcon: {
    alignItems: "center",
    justifyContent: "center",
    top: Platform.OS === "ios" ? RoundPixel(10) : RoundPixel(0),
  },
});

export default styles;
