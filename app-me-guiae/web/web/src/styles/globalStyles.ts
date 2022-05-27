import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
});

() => {
  globalStyles();
};

export const center = {
  display: "flex",
  alignItems: "center",
};

export const row = {
  display: "flex",
  flexDirection: "row",
};

export const column = {
  display: "flex",
  flexDirection: "column",
};
