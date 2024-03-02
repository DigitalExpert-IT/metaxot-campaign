import { Box, Container } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Header from "./Header";
import Roadmap from "./Roadmap";
import TheGame from "./TheGame";
import MetaxotCore from "./MetaxotCore";
import RiskAndCurrent from "./RiskAndCurrent";
import Features from "./Features";
import BakeOurProject from "./BakeOurProject";
import Development from "./Development";

const Home = () => {
  return (
    <Layout>
      <Container maxW={"container.xl"}>
        <Box display={"flex"} flexDirection={"column"} gap={24}>
          <Header />
          <Roadmap />
          <TheGame />
          <MetaxotCore />
          <Features />
          <BakeOurProject />
          <Development />
          <RiskAndCurrent />
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
