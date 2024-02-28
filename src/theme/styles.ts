import { Styles } from "@chakra-ui/theme-tools";
import "@fontsource/urbanist"
export const styles: Styles = {
  global: {
    body: {
      height: "100vh",
      fontFamily: "Urbanist",
      color: "chakra-body-text",
      bg: "black",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
      display: "block",
    },
    "*::placeholder": {
      color: "chakra-placeholder-color",
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color",
    },
  },
};
