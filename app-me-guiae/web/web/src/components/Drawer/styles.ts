import { styled } from "@stitches/react";
import { whiteA } from "@radix-ui/colors";

export const DrawerContainer = styled("div", {
  backgroundColor: whiteA.whiteA12,
  width: "100px",
  height: "96vh",
  borderRadius: 100,
  marginLeft: 20,
  marginRight: 20,

  display: "flex",
  flexDirection: "column",
});
