import { Box, Img, Spinner, Text, useDisclosure, useToast } from "@chakra-ui/react";
import bakeOurProjectUrl from "@/assets/images/bake-our-project.png";
import { useTranslation } from "react-i18next";
import { RewardList } from "@/constant/bakeOurProject";
import CardWithBackgroundImage from "@/components/CardWithBackgroundImage";
import { TPackage, useBackerPackage } from "@/hooks/useBackerContract";
import GreetingModal from "@/components/GreetingModal";
import { useEffect } from "react";
import { useAddress } from "@thirdweb-dev/react";

const BakeOurProject = () => {
  const { t } = useTranslation();
  const address = useAddress();
  const toast = useToast();
  const { listPackage, buyPackage, claimId } = useBackerPackage();
  const { isOpen, onOpen, onClose } = useDisclosure();


  const handleBuyPackage = async (pkg: TPackage) => {
    if(address !== undefined) {
        await buyPackage.exec(Number(pkg.id))
    } else {
      toast({
        title: 'Buy Package Denied',
          description: "Please Connect Wallet",
          status: 'error',
          duration: 3000,
          isClosable: true,
      })
    }
  }

  useEffect(() => {
    if (claimId !== "") onOpen();
  }, [claimId, onOpen]);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={100}
      id="Backer"
    >
      <Img
        src={bakeOurProjectUrl}
        my={10}
        maxW={{ base: "100%", md: "655px" }}
      />
      <Text color={"#FFBFFC"}>{t("selectPerks")}</Text>
      {!listPackage || buyPackage.isLoading ? <Spinner /> :
        (
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            gap={20}
          >
            {listPackage.map((pkg) => {
              const rewardItem = RewardList[pkg.uuid as "package-1"];

              return (
                <CardWithBackgroundImage
                  key={rewardItem.title}
                  title={rewardItem.title}
                  subtitle={t(rewardItem.subtitle)}
                  price={pkg.price}
                  imageUrl={"https://ik.imagekit.io/msxxxaegj/metashot/backerBanner.png?updatedAt=1713419174848"}
                  description=""
                  onClick={() => handleBuyPackage(pkg)} />
              )
            })}
          </Box>
        )
      }

      <GreetingModal isOpen={isOpen} onClose={onClose} claimId={claimId} />
    </Box>
  );
};

export default BakeOurProject;
