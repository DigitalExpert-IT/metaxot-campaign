import SectionTitle from "@/components/SectionTitle";
import { Box, Img, Text } from "@chakra-ui/react";
import vrIconUrl from "@/assets/images/vr-icon.png";
import nintendoIconUrl from "@/assets/images/nintendo-icon.png";
import { useTranslation } from "react-i18next";

const Development = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <SectionTitle title={t("development.title")} />
      <Text fontSize={"xl"} mt={14} textAlign={"justify"}>
        {t("development.description")}
      </Text>
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
