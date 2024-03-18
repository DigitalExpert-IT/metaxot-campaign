import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";import {
  useAddress,
  useSetIsWalletModalOpen,
  ConnectWallet
} from "@thirdweb-dev/react";

const WalletButton = () => {
  const { t } = useTranslation();
  const openModal = useSetIsWalletModalOpen();
  const address = useAddress();


  if(address) return <ConnectWallet />;

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
      my={5}
      minW={100}
      onClick={() => openModal(true)}
    >
      <Text
        color={"black"}
        fontFamily={"Unlock"}
        lineHeight={"3"}
        fontSize={"xs"}
        letterSpacing={"widest"}
        fontWeight={"bold"}
      >
        {t("connectWallet")}
      </Text>
    </Box>
  );
};

export default WalletButton;
