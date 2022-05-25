import { styled } from "@stitches/react";
import { violet, green } from "@radix-ui/colors";

export const Container = styled("div", {
  backgroundImage: `linear-gradient(19deg, ${violet.violet10} 0%, ${green.green10} 100%)`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100vw",
});
