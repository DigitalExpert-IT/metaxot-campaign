import { Box, Img, Spinner, Text, useDisclosure } from "@chakra-ui/react";
import bakeOurProjectUrl from "@/assets/images/bake-our-project.png";
import { useTranslation } from "react-i18next";
import { RewardList } from "@/constant/bakeOurProject";
import CardWithImageTitle from "@/components/CardWithImageTitle";
import { TPackage, useBackerPackage } from "@/hooks/useBackerContract";
import GreetingModal from "@/components/GreetingModal";
import { useState } from "react";

const BakeOurProject = () => {
  const { t } = useTranslation();
  const [claimId, setClaimId] = useState("");
  const { listPackage, buyPackage } = useBackerPackage();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleBuyPackage = async (pkg: TPackage) => {
    const claimId = await buyPackage.exec(Number(pkg.id));
    console.log("claim ID", claimId);
    setClaimId(claimId);
    onOpen();
  }

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
                  title={t(rewardItem.title)}
                  subtitle={t(rewardItem.subtitle)}
                  price={Number(pkg.price)}
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
