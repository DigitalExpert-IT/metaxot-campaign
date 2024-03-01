import { Box, Img, Text } from "@chakra-ui/react";
import rightTitleShapeUrl from "@/assets/images/title-shape-right.png";
import { useTranslation } from "react-i18next";
import rightTitleShapeOneUrl from "@/assets/images/title-shape-right-1.png";
import leftTitleShapeOneUrl from "@/assets/images/title-shape-left-1.png";
import metaverseOneUrl from "@/assets/images/metaverse-1.png";
import metaverseTwoUrl from "@/assets/images/metaverse-2.png";
import metaverseThreeUrl from "@/assets/images/metaverse-3.png";
import metaverseFourUrl from "@/assets/images/metaverse-4.png";
import metaverseFiveUrl from "@/assets/images/metaverse-5.png";
import metaverseSixUrl from "@/assets/images/metaverse-6.png";
import metaversePlaceholderUrl from "@/assets/images/metaverse-placeholder.png";

const MetaxotCore: React.FC = () => {
  const { t } = useTranslation();
  const imageUrls: Array<string> = [
    metaverseOneUrl,
    metaverseTwoUrl,
    metaverseThreeUrl,
    metaverseFourUrl,
    metaverseFiveUrl,
    metaverseSixUrl,
    metaversePlaceholderUrl,
    metaversePlaceholderUrl,
  ];

  return (
    <Box display={"flex"} flexDirection={"column"} gap={6}>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={6}>
        <Text
          color={"white"}
          fontFamily={"unlock"}
          lineHeight={"3"}
          fontSize={"3xl"}
          fontWeight={700}
        >
          {t("metaxotCore.title")}
        </Text>
        <Img
          src={rightTitleShapeUrl}
          alt={"A shape at the right side of title"}
          maxH={"6px"}
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
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
          {imageUrls.map((url, idx) => (
            <Img key={url} src={url} alt={`metaverse image ${idx + 1}`} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MetaxotCore;
