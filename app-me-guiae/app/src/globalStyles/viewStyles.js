import { StyleSheet } from "react-native";

import { RoundPixel, widthDPI } from "../utils/roundPixel";

const viewStyles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  column: {
    flexDirection: "column",
  },

  columnReverse: {
    flexDirection: "column-reverse",
  },

  rowEnd: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: widthDPI(90),
    position: "absolute",
    bottom: RoundPixel(8),
    paddingLeft: RoundPixel(16),
    paddingRight: RoundPixel(16),
  },
});

export { viewStyles };
