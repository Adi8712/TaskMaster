import { extendTheme } from "@chakra-ui/react";

const light = extendTheme({
  fonts: {
    body: `'Montserrat', sans-serif`,
  },
  colors: {
    text: {
      main: "#130e06",
    },
    background: {
      main: "#fcf9f3",
      50: "#faf5eb",
      100: "#f5ebd6",
      200: "#ebd6ad",
      300: "#e0c285",
      400: "#d6ad5c",
      500: "#cc9933",
      600: "#a37a29",
      700: "#7a5c1f",
      800: "#523d14",
      900: "#291f0a",
    },
    primary: {
      main: "#d09b39",
      50: "#faf5ea",
      100: "#f5ead6",
      200: "#ecd5ac",
      300: "#e2c183",
      400: "#d8ac5a",
      500: "#cf9730",
      600: "#a57927",
      700: "#7c5b1d",
      800: "#533c13",
      900: "#291e0a",
    },
    secondary: {
      main: "#e9c88b",
      50: "#fbf5ea",
      100: "#f7ebd4",
      200: "#efd6a9",
      300: "#e7c27e",
      400: "#deae54",
      500: "#d69a29",
      600: "#ab7b21",
      700: "#815c18",
      800: "#563d10",
      900: "#2b1f08",
    },
    accent: {
      main: "#e6b251",
      50: "#fcf5e9",
      100: "#f9ebd2",
      200: "#f2d7a6",
      300: "#ecc479",
      400: "#e6b04c",
      500: "#df9c20",
      600: "#b37d19",
      700: "#865e13",
      800: "#593e0d",
      900: "#2d1f06",
    },
  },
});

export default light