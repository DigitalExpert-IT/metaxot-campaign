import { Box, Img, Spinner, Text } from "@chakra-ui/react";
import bakeOurProjectUrl from "@/assets/images/bake-our-project.png";
import { useTranslation } from "react-i18next";
import { RewardList } from "@/constant/bakeOurProject";
import CardWithImageTitle from "@/components/CardWithImageTitle";
import { TPackage, useBackerPackage } from "@/hooks/useBackerContract";

const BakeOurProject = () => {
  const { t } = useTranslation();
  const { listPackage, buyPackage } = useBackerPackage();

  const handleBuyPackage = async (pkg: TPackage) => {
    const claimId = await buyPackage.exec(Number(pkg.id));
    console.log("claim ID", claimId);
    // Will be modifed to Congrats Modal/Thanks modal. (wait for design) 
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
              imageUrl={rewardItem.imageUrl}
              onClick={() => handleBuyPackage(pkg)}
            />
          )})}
        </Box>
        )
      }
    </Box>
  );
};

export default BakeOurProject;
