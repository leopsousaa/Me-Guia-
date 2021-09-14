import { StyleSheet } from "react-native";

import { shadow } from "../../globalStyles/shadow";
import { RoundPixel, widthDPI } from "../../utils/roundPixel";
import { PALLET } from "../../globalStyles/palletColor";

const styles = StyleSheet.create({
  container: {
    width: widthDPI(90),
    height: RoundPixel(280),
    backgroundColor: "#f3f3f3",
    borderRadius: RoundPixel(16),
    marginTop: RoundPixel(20),
    ...shadow.shadow,
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
    fontWeight: "bold",
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

export default styles;
