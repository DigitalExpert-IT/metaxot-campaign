import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import { Navigation } from "@/constant/navigation";
import Footer from "./Footer";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = (props) => {
  return (
    <Box overflow={"auto"}>
      <Navbar data={Navigation} />
      <Box mt={60}>{props.children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
