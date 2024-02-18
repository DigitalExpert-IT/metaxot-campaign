import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      font-family: "Urbanist", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
    `}
  />
);

export default Fonts;
