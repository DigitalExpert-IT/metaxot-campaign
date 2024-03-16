import { Box, Image, Text } from "@chakra-ui/react";
import metaxotLogoUrl from "@/assets/images/metaxot-logo-white.png";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      h={"80vh"}
      w={"100%"}
    >
      <Image width={16} mb={"6"} src={metaxotLogoUrl} alt="logo" />
      <Text fontSize={"4xl"} textAlign={"center"}>
        {t("notFound.title")}
      </Text>
    </Box>
  );
};

export default NotFound;
