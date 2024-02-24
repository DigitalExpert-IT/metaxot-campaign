import { Container } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import Header from "./Header";

const Home = () => {
  return (
    <Layout>
      <Container maxW={"container.xl"}>
        <Header />
      </Container>
    </Layout>
  );
};

export default Home;
