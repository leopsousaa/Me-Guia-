import { PixelRatio } from "react-native";

// This function calculates the pixel density of the device's window height and convert in percent.
const heightDPI = (value, dimension) => {
  const heightInDPI = PixelRatio.roundToNearestPixel(dimension);

  const result = (heightInDPI * value) / 100;

  return result;
};

// This function calculates the pixel density of the device's window height.
const RoundPixel = (value) => {
  const PixelResult = PixelRatio.roundToNearestPixel(value);

  return PixelResult;
};

// This function calculates the pixel density of the device's window width and convert in percent.
const widthDPI = (value, dimension) => {
  const widthInDPI = PixelRatio.roundToNearestPixel(dimension);

  const result = (widthInDPI * value) / 100;

  return result;
};

export { heightDPI, widthDPI, RoundPixel };
