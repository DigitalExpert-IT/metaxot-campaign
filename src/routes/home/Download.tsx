import SectionTitle from "@/components/SectionTitle";
import useFetchContents from "@/hooks/useFetchContents";
import { Box, Img, Link, Text } from "@chakra-ui/react";

const Download = () => {
  const {data, loading} = useFetchContents("downloads")

  return (
    <Box>
      {!loading && data.map((item, idx) => (
        <>
        <SectionTitle title={item.attributes.Header} key={idx}/>
        <Text fontSize={"xl"} mt={14} textAlign={"justify"}>
          {item.attributes.Caption}
        </Text>
        </>
      ))
      }
      <Link
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={60}
        my={20}
        href="#"
      >
        <Img src={"https://ik.imagekit.io/msxxxaegj/metashot/Download.png?updatedAt=1713405845982"} minW={350} />
      </Link>
    </Box>
  );
};

export default Download;
