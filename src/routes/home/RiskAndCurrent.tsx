import SectionTitle from "@/components/SectionTitle";
import { Box, Img, Text } from "@chakra-ui/react";
import imgSupportUsUrl from "@/assets/images/support-us.png";
import { useTranslation } from "react-i18next";

const RiskAndCurrent = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <SectionTitle title={t("currentStatus.title")} />
      <Text fontSize={"xl"} mt={14} textAlign={"justify"}>
        {t("currentStatus.description")}
      </Text>
      <Box display={"flex"} justifyContent={"center"} my={10}>
        <Img src={imgSupportUsUrl} />
      </Box>
      <SectionTitle title={t("riskAndChallenge.title")} my={20} />
      <Text fontSize={"xl"} mt={14} textAlign={"justify"}>
        {t("riskAndChallenge.description")}
      </Text>
    </Box>
  );
};

export default RiskAndCurrent;
