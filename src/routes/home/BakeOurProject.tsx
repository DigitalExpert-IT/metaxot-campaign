import { Box, Img, Text } from "@chakra-ui/react";
import bakeOurProjectUrl from "@/assets/images/bake-our-project.png";
import { useTranslation } from "react-i18next";
import { RewardList } from "@/constant/bakeOurProject";
import CardWithImageTitle from "@/components/CardWithImageTitle";

const BakeOurProject = () => {
  const { t } = useTranslation();

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={100}
    >
      <Img
        src={bakeOurProjectUrl}
        my={10}
        maxW={{ base: "100%", md: "655px" }}
      />
      <Text color={"#FFBFFC"}>{t("selectPerks")}</Text>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={100}
      >
        {RewardList.map((reward) => (
          <CardWithImageTitle
            key={reward.title}
            title={t(reward.title)}
            subtitle={t(reward.subtitle)}
            imageUrl={reward.imageUrl}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BakeOurProject;
