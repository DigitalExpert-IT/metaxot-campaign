import { Box, Img, Text } from "@chakra-ui/react";
import theGameUrl from "@/assets/images/the-game.png";
import SectionTitle from "@/components/SectionTitle";
import useFetchContents from "@/hooks/useFetchContents";

const TheGame: React.FC = () => {
  const {data, loading} = useFetchContents("the-games")
  return (
    <Box display={"flex"} flexDirection={"column"} gap={6}>
      {!loading && data.map((item, idx) => (
      <><SectionTitle title={item.attributes.Header} key={idx}/><Box
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          gap={4}
        >
          <Box fontSize={"xl"} textAlign={"justify"}>
            <Text mt={14}>{item.attributes.Caption}</Text>
          </Box>
          {/* TO-DO: Change image to video component when the content is ready. */}
          <Img src={theGameUrl} alt={"The game thumbnail"} />
        </Box></>
      ))}
    </Box>
  );
};

export default TheGame;
