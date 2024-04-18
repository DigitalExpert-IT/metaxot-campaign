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
import Faq from "./Faq";
import Download from "./Download";
import Community from "./Community";

const Home = () => {
  return (
    <Layout>
      <Container maxW={"container.xl"} whiteSpace={"pre-line"}>
        <Box display={"flex"} flexDirection={"column"} gap={24}>
          <Header />
          <Roadmap />
          <BakeOurProject />
          <TheGame />
          <MetaxotCore />
          <Features />
          <Download />
          <Development />
          <RiskAndCurrent />
          <Faq/>
          <Community/>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
