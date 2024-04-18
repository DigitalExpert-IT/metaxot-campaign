import SectionTitle from "@/components/SectionTitle";
import { Box, Img, Link, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { media } from "@/constant/media";

const Community = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <SectionTitle title={t("community.title")} />
      <Text fontSize={"2xl"} fontWeight={"500"} mt={14} textAlign={"center"}>
        {t("community.description")}
      </Text>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={40}
        my={10}
      >
        {media.map((item, idx) => (
          <Link key={idx} href={item.url}>
            <Img src={item.image} maxW={350}/>
        </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Community;
