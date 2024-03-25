import { Box, Center, Img, Text } from "@chakra-ui/react";
import leftTitleShapeOneUrl from "@/assets/images/title-shape-left-1.png";
import rightTitleShapeOneUrl from "@/assets/images/title-shape-right-1.png";
import { IFeature } from "@/constant/featureList";

interface IFeatureImage {
  imageUrl: string;
}

const FeatureImage: React.FC<IFeatureImage> = ({ imageUrl }) => {
  return (
    <Center marginBottom={8}>
      <Img src={imageUrl} maxW={{ base: "80%", md: "564px" }} />
    </Center>
  );
};

const Feature: React.FC<IFeature> = ({ title, direction, imageUrl, texts }) => {
  return (
    <Box display={"flex"} flexDirection={{ base: "column", md: "row" }} gap={6}>
      <Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={4}
          alignItems={"center"}
          justifyContent={{
            base: "center",
            md: `${direction === "column" ? "center" : "flex-start"}`,
          }}
          marginBottom={8}
        >
          <Img
            src={leftTitleShapeOneUrl}
            alt={"A shape at the left side of title"}
            maxH={"30px"}
          />
          <Text fontSize={"3xl"} color={"white"}>
            {title}
          </Text>
          <Img
            src={rightTitleShapeOneUrl}
            alt={"A shape at the right side of title"}
            maxH={"30px"}
          />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          {direction === "column" && imageUrl ? (
            <FeatureImage imageUrl={imageUrl} />
          ) : null}
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            gap={4}
            textAlign={"justify"}
          >
            <Box>
              {texts.mainContent ? (
                <Box marginBottom={8}>
                  <Text>{texts.mainContent}</Text>
                </Box>
              ) : null}
              {texts.subContent && texts.subContent.length ? (
                <Box
                  display={"flex"}
                  flexDirection={{ base: "column", md: "row" }}
                  gap={16}
                  justifyContent={"center"}
                >
                  {texts.subContent.map((subContent, idx) => (
                    <Text key={idx} flex={1}>{subContent}</Text>
                  ))}
                </Box>
              ) : null}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        {direction === "row" && imageUrl ? (
          <FeatureImage imageUrl={imageUrl} />
        ) : null}
      </Box>
    </Box>
  );
};

export default Feature;
