import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles } from "./components/buttonStyles";

export const customTheme = extendTheme({
  colors: {
    brand: {
      primary: "#62c18a",
      verified: "#4299E1",
      secondary: "tomato",
      boxAccentLight: "#F7FAFC",
      boxAccentDark: "#2D3748",
      mentioning: "#81E6D9",
      borderDividerLight: "#d0d1d4",
      borderDividerDark: "rgb(31,39,50)",
    },
  },
  components: {
    Button: ButtonStyles,
  },
});
