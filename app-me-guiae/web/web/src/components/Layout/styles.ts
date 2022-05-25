import { styled } from "@stitches/react";
import { violet, green } from "@radix-ui/colors";

export const Container = styled("div", {
  backgroundImage: `linear-gradient(19deg, ${violet.violet10} 0%, ${green.green10} 100%)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100vw",
});
