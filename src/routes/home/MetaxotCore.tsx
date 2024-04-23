import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import rightTitleShapeOneUrl from "@/assets/images/title-shape-right-1.png";
import leftTitleShapeOneUrl from "@/assets/images/title-shape-left-1.png";
import { CoreList } from "@/constant/coreList";
import SectionTitle from "@/components/SectionTitle";
import { useState } from "react";
import useFetchContents from "@/hooks/useFetchContents";

const MetaxotCore: React.FC = () => {
  const { t } = useTranslation();
  const [activeCore, setActiveCore] = useState<number>(-1)
  const {data, loading} = useFetchContents("sub-metaxot-cores")

  return (
    <Box display={"flex"} flexDirection={"column"} gap={6}>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={6}>
        <SectionTitle title={t("metaxotCore.title")} />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={4}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Img
          src={leftTitleShapeOneUrl}
          alt={"A shape at the left side of title"}
          maxH={"30px"}
        />
        <Text fontSize={"3xl"} color={"white"}>
          {t("metaxotCore.content.subtitle")}
        </Text>
        <Img
          src={rightTitleShapeOneUrl}
          alt={"A shape at the right side of title"}
          maxH={"30px"}
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Text textAlign={"justify"} marginBottom={12}>
          {t("metaxotCore.content.paragraph")}
        </Text>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={2}
        >
          {activeCore >= 0 ? (
            <Flex flexDir={{base: "column", lg: "row"}} onClick={() => setActiveCore(-1)} gap={10} alignItems={"center"}>
              <Box>
                <Img src={CoreList[activeCore].image} alt={`metaverse image ${activeCore + 1}`} minH={"390px"} minW={"127px"} borderRadius={"lg"} alignSelf={"center"}/>
              </Box>
              <Box>
              <Box textAlign={{base: "center", lg: "left"}}>
                <Heading>{!loading && data[activeCore].attributes.SubHeader}</Heading>
                <Text margin={"auto"} fontSize={{base: "md", lg: "2xl"}} fontWeight={"600"} mt={5}>
                  {!loading && data[activeCore].attributes.Caption}
                </Text>
              </Box>
              </Box>
            </Flex>
          ) : (
            CoreList.map((item, idx) => (
              <Img key={idx} src={item.image} alt={`metaverse image ${idx + 1}`} h={"390px"} w={"127px"} borderRadius={"lg"} opacity={0.5} _hover={{opacity: "100%"}} onClick={() => setActiveCore(idx)}/>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MetaxotCore;
