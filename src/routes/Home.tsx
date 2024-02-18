import { Center } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Navigation } from "../constant/navigation";

const Home = () => {
  return (
    <Center>
      <Navbar data={Navigation} />
    </Center>
  );
};

export default Home;
