import SectionTitle from "@/components/SectionTitle";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import imgSupportUs from "@/assets/images/support-us.png";
import { useTranslation } from "react-i18next";

const RiskAndCurrent = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <SectionTitle title={t("currentStatus.title")} />
      <Text fontSize={"xl"} mt={14} textAlign={"justify"}>
        {t("currentStatus.description")}
      </Text>
      <Flex justify={"center"} my={10}>
        <Img src={imgSupportUs} />
      </Flex>
      <SectionTitle title={t("riskAndChallenge.title")} my={20} />
      <Text fontSize={"xl"} mt={14} textAlign={"justify"}>
        {t("riskAndChallenge.description")}
      </Text>
    </Box>
  );
};

export default RiskAndCurrent;
