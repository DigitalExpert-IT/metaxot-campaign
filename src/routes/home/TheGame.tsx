import { Box, Img, Text } from "@chakra-ui/react";
import theGameUrl from "@/assets/images/the-game.png";
import { useTranslation } from "react-i18next";
import SectionTitle from "@/components/SectionTitle";

const TheGame: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box display={"flex"} flexDirection={"column"} gap={6}>
      <SectionTitle title={t("theGame.title")} />

      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
      >
        <Box fontSize={"xl"} textAlign={"justify"}>
          <Text mt={14}>{t("theGame.content.paragraphOne")}</Text>
          <Text>{t("theGame.content.paragraphTwo")}</Text>
        </Box>
        {/* TO-DO: Change image to video component when the content is ready. */}
        <Img src={theGameUrl} alt={"The game thumbnail"} />
      </Box>
    </Box>
  );
};

export default TheGame;
