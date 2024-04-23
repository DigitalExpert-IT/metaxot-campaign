import SectionTitle from "@/components/SectionTitle";
import { Box, Img, Link, Text } from "@chakra-ui/react";
import { media } from "@/constant/media";
import useFetchContents from "@/hooks/useFetchContents";

const Community = () => {
  const {data, loading} = useFetchContents("communities")

  return (
    !loading && data.map((item, idx) => (
    <Box>
        <SectionTitle title={item.attributes.Header} key={idx}/><Text key={idx} fontSize={"2xl"} fontWeight={"500"} mt={14} textAlign={"center"}>
          {item.attributes.Caption}
        </Text>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={40}
        my={10}
      >
        {media.map((item, idx) => (
          <Link key={idx} href={item.url}>
            <Img src={item.image} maxW={350}/>
        </Link>
        ))}
      </Box>
    </Box>
    ))
  );
};

export default Community;
