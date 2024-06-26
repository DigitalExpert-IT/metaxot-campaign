import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";
import useAuth from "@/hooks/useAuth";
import { useBackerPackage } from "@/hooks/useBackerContract";
import dummyItem from "@/assets/images/dummyItem.png"
import backgroundProfile from "@/assets/images/profileBanner.png"

const Profile = () => {
  const { userData } = useAuth();
  const {userPackage, isLoadingPackages } = useBackerPackage();

  return (
    <Layout>
      <Container maxW={"container.xl"} whiteSpace={"pre-line"}>
        <Box display={"flex"} flexDirection={"column"} gap={24}>
          <Image
            src={
              backgroundProfile
            }
            alt={"Hero Image"}
            pos={"relative"}
          />
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            pos={"absolute"}
            mt={"25vh"}
            ml={"5vh"}
            gap={10}
            align={"center"}
          >
            <Box borderWidth={"0.2vh"} borderColor={"white"}>
              <Image src="https://dummyimage.com/190x190/000/fff.png&text=backer+user" />
            </Box>
            <Text mt={"5vh"}>ID: {userData?.email}</Text>
          </Flex>
          <Heading mt={{ lg: "10vh", base: "55vh" }}>Purchase Item</Heading>
          <Box
            display={"flex"}
            flexDirection={{ base: "column", lg: "row" }}
            gap={20}
          >
            {/* FIXME: Need to add image url and description to the ownedListPackage func */}
            {isLoadingPackages ? (
              <Spinner />
            ) : (
              userPackage.map((item: string, idx: string | number) => (
                <Stack key={idx}>
                  <Image
                    src={
                      dummyItem
                    }
                  />
                  <Text color={"white"}>{item}</Text>
                  <Text color={"white"}>March, 23rd 2024</Text>
                </Stack>
              ))
            )}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Profile;
