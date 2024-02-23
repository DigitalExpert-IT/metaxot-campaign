import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import { Navigation } from "@/constant/navigation";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = (props) => {
  return (
    <Box>
      <Navbar data={Navigation} />
      <Box mt={60}>{props.children}</Box>
    </Box>
  );
};

export default Layout;
