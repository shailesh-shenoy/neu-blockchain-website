import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#f5f5f5",
    orange: {
      50: "#ffeee5",
      100: "#FFF7F3",
      200: "#faac86",
      300: "#fa8b55",
      400: "#fa6b26",
      500: "#e15211",
      600: "#af400c",
      700: "#7d2e07",
      800: "#4b1c05",
      900: "#1a0900",
    },
    primary: {
      50: "#ffe8e3",
      100: "#ffbeb4",
      200: "#fb8e84",
      300: "#f85e54",
      400: "#f42a24", //Main brand color for dark theme
      500: "#db0b0c", //Main brand color for light theme
      600: "#ab0c05",
      700: "#7b0f02",
      800: "#4c0e00",
      900: "#200800",
    },
    secondary: {
      50: "#f3f3ec",
      100: "#e7e6e3", // Main background for light theme
      200: "#c3c2bd",
      300: "#aca8a3",
      400: "#948f88",
      500: "#7a746f",
      600: "#5f5a55",
      700: "#443f3d",
      800: "#292523", //Main background for dark theme
      900: "#120605",
    },
    tertiary: {
      50: "#ffe9e5",
      100: "#f1c7c2",
      200: "#e2a69c",
      300: "#D3806F", //Main tertiary
      400: "#c85d50",
      500: "#af3b37",
      600: "#892a2d",
      700: "#631d25",
      800: "#3d1017",
      900: "#1c0007",
    },
  },
});
