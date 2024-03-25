import { Box, Img, Spinner, Text, useDisclosure } from "@chakra-ui/react";
import bakeOurProjectUrl from "@/assets/images/bake-our-project.png";
import { useTranslation } from "react-i18next";
import { RewardList } from "@/constant/bakeOurProject";
import CardWithImageTitle from "@/components/CardWithImageTitle";
import { TPackage, useBackerPackage } from "@/hooks/useBackerContract";
import GreetingModal from "@/components/GreetingModal";
import { useEffect } from "react";

const BakeOurProject = () => {
  const { t } = useTranslation();
  const { listPackage, buyPackage, claimId } = useBackerPackage();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleBuyPackage = async (pkg: TPackage) => {
    await buyPackage.exec(Number(pkg.id));
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
            flexDirection={"column"}
            justifyContent={"center"}
            gap={100}
          >
            {listPackage.map((pkg) => {
              const rewardItem = RewardList[pkg.uuid as "package-1"];

              return (
                <CardWithImageTitle
                  key={rewardItem.title}
                  title={rewardItem.title}
                  subtitle={t(rewardItem.subtitle)}
                  price={pkg.price}
                  imageUrl={rewardItem.imageUrl}
                  onClick={() => handleBuyPackage(pkg)}
                />
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
