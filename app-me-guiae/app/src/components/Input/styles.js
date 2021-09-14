import { StyleSheet } from "react-native";

import { shadow } from "../../globalStyles/shadow";
import { PALLET } from "../../globalStyles/palletColor";

import { RoundPixel, widthDPI } from "../../utils/roundPixel";

const styles = StyleSheet.create({
  input: {
    width: widthDPI(90),
    height: RoundPixel(52),
    padding: RoundPixel(16),
    borderRadius: RoundPixel(26),
    backgroundColor: PALLET.light,
    position: "absolute",
    top: RoundPixel(20),
    ...shadow.shadow,
  },
});

export { styles };
