import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  utils: {
    // Abbreviated margin properties
    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // A property for applying width/height together
    size: (value: string) => ({
      width: value,
      height: value,
    }),

    // A property to apply linear gradient
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),

    // An abbreviated property for border-radius
    br: (value: string) => ({
      borderRadius: value,
    }),
  },
});
