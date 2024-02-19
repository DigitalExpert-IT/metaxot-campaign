import { Global } from "@emotion/react";
import "@fontsource-variable/urbanist";
import "@fontsource/unlock";

const Fonts = () => (
  <Global
    styles={`
      font-family: "Urbanist Variable", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
    `}
  />
);

export default Fonts;
