import { Box, Img, Text } from "@chakra-ui/react";
import rightTitleShapeUrl from "@/assets/images/title-shape-right.png";
import theGameUrl from "@/assets/images/the-game.png";
import { useTranslation } from "react-i18next";

const TheGame: React.FC = () => {
  const { t } = useTranslation();
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
          {t("theGame.title")}
        </Text>
        <Img
          src={rightTitleShapeUrl}
          alt={"A shape in the right side of title"}
          maxH={"6px"}
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
      >
        <Box fontSize={"xl"}>
          <p style={{ fontFamily: `Urbanist` }}>
            {t("theGame.content.paragraphOne")}
          </p>
          <p style={{ fontFamily: `Urbanist` }}>
            {t("theGame.content.paragraphTwo")}
          </p>
        </Box>
        {/* TO-DO: Change image to video component when the content is ready. */}
        <Img src={theGameUrl} alt={"The game thumbnail"} />
      </Box>
    </Box>
  );
};

export default TheGame;
