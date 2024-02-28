import { Box, Container } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Header from "./Header";
import Roadmap from "./Roadmap";
import TheGame from "./TheGame";
import RiskAndCurrent from "./RiskAndCurrent";

const Home = () => {
  return (
    <Layout>
      <Container maxW={"container.xl"}>
        <Box display={"flex"} flexDirection={"column"} gap={24}>
          <Header />
          <Roadmap />
          <TheGame />
          <RiskAndCurrent/>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
