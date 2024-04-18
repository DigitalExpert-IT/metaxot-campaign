import SectionTitle from "@/components/SectionTitle";
import { Box, Img, Link, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Download = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <SectionTitle title={t("download.title")} />
      <Text fontSize={"xl"} mt={14} textAlign={"justify"}>
        {t("download.version")}
      </Text>
      <Text fontSize={"xl"} textAlign={"justify"}>
        {t("download.releaseDate")}
      </Text>
      <Link
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={60}
        my={10}
        href="#"
      >
        <Img src={"https://ik.imagekit.io/msxxxaegj/metashot/Download.png?updatedAt=1713405845982"} minW={350} />
      </Link>
    </Box>
  );
};

export default Download;
