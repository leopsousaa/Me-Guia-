import { styled } from "@stitches/react";
import { whiteA, violet, green } from "@radix-ui/colors";

export const DrawerContainer = styled("aside", {
  backgroundColor: whiteA.whiteA12,
  width: "100px",
  height: "96vh",
  borderRadius: 100,
  marginLeft: 20,
  marginRight: 20,
  padding: 12,

  display: "flex",
  flexDirection: "column",
});

export const Thumbnail = styled("div", {
  width: 100,
  height: 100,
  borderRadius: 50,
  backgroundImage: `linear-gradient(19deg, ${violet.violet10} 0%, ${green.green10} 100%)`,
  color: whiteA.whiteA12,
  textAlign: "center",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Button = {
  backgroundImage: `linear-gradient(19deg, ${violet.violet10} 0%, ${green.green10} 100%)`,
  borderWidth: 0,
  marginTop: 24,
  color: whiteA.whiteA12,
  borderRadius: 12,
  height: 50,
};
