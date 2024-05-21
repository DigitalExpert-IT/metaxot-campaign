import { Box, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import { userPackage } from "@/constant/dummyUserPackage";
import useAuth from "@/hooks/useAuth";

const Profile = () => {
    const {userData} = useAuth();
    
  return (
    <Layout>
      <Container maxW={"container.xl"} whiteSpace={"pre-line"}>
        <Box display={"flex"} flexDirection={"column"} gap={24}>
        <Image src={"https://ik.imagekit.io/msxxxaegj/alitaLaunchAir/profileBanner.png?updatedAt=1716175327549"} alt={"Hero Image"} pos={"relative"}/>
        <Flex flexDir={{base: "column", lg: "row"}} pos={"absolute"} mt={"25vh"} ml={"5vh"} gap={10} align={"center"}>
            <Box borderWidth={"0.2vh"} borderColor={"white"}>
            <Image src="https://dummyimage.com/190x190/000/fff.png&text=backer+user" />
            </Box>
            <Text mt={"5vh"}>ID: {userData?.email}</Text>
        </Flex>
        <Heading mt={{lg: "10vh", base: "55vh"}}>Purchase Item</Heading>
        <Box display={"flex"} flexDirection={{ base: "column", lg: "row" }} gap={20}>
            {userPackage.map((item, idx) => (
                <Stack key={idx}>
                    <Image src={item.image}/>
                    <Text color={"white"}>
                        {item.title}
                    </Text>
                    <Text color={"white"}>
                        {item.description}
                    </Text>
                </Stack>
            ))}
        </Box>
    </Box>
      </Container>
    </Layout>
  );
};

export default Profile;
