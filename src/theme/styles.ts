import { Styles } from "@chakra-ui/theme-tools";
import "@fontsource/urbanist";
export const styles: Styles = {
  global: {
    body: {
      fontFamily: "Urbanist",
      color: "chakra-body-text",
      bg: "black",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: "chakra-placeholder-color",
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color",
    },
  },
};
