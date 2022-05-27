import { styled } from "@stitches/react";

export const Button = styled("button", {
  $$shadowColor: "$colors$purple500",
  boxShadow: "0 0 0 15px $$shadowColor",

  // use a token from the sizes scale
  marginTop: "$sizes$1",
});
