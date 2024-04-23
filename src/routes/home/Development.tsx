import SectionTitle from "@/components/SectionTitle";
import { Box, Img, Text } from "@chakra-ui/react";
import vrIconUrl from "@/assets/images/vr-icon.png";
import nintendoIconUrl from "@/assets/images/nintendo-icon.png";
import useFetchContents from "@/hooks/useFetchContents";

const Development = () => {
  const {data, loading} = useFetchContents("developments")
  return (
    <Box>
      {!loading && data.map((item) => (
      <><SectionTitle title={item.attributes.Header} /><Text fontSize={"xl"} mt={14} textAlign={"justify"}>
          {item.attributes.Caption}
        </Text></>
      ))}
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={60}
        my={10}
      >
        <Img src={vrIconUrl} maxW={205} />
        <Img src={nintendoIconUrl} maxW={205} />
      </Box>
    </Box>
  );
};

export default Development;
