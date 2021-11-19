import { darken, mode, whiten } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  // 1. We can update the base styles
  baseStyle: {},
  // 2. We can add a new button size or extend existing
  sizes: {},
  // 3. We can add a new visual variant
  variants: {
    primary: (props) => ({
      bg: mode(whiten("brand.primary", 30), darken("brand.primary", 15))(props),
      _hover: {
        bg: mode(
          darken("brand.primary", 10),
          darken("brand.primary", 5)
        )(props),
        boxShadow: "md",
      },
    }),
    "primary-outline": () => ({
      bg: "transparent",
      border: "1px solid",
      borderColor: "brand.primary",
      color: "brand.primary",
      _hover: {
        boxShadow: "md",
      },
    }),
  },
};
