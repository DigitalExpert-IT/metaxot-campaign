import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const WalletButton = () => {
  const { t } = useTranslation();

  return (
    <Box
      as={"button"}
      bgGradient={"radial(#FFBFFC, #3391FF)"}
      borderTopRightRadius={0}
      borderTopLeftRadius={20}
      borderBottomLeftRadius={0}
      borderBottomRightRadius={20}
      px={5}
      py={3}
    >
      <Text
        color={"black"}
        fontFamily={"unlock"}
        lineHeight={"9.61px"}
        fontSize="2xs"
        letterSpacing="widest"
      >
        {t("connectWallet")}
      </Text>
    </Box>
  );
};

export default WalletButton;