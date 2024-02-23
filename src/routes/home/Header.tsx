import { Box, Center, Image, Text } from "@chakra-ui/react";
import heroImageUrl from "@/assets/images/hero-image.png";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Center w={"100%"}>
      <Box display={"flex"} flexDirection={"column"} gap={24}>
        <Image src={heroImageUrl} alt={"Hero Image"} />
        <Box display={"flex"} flexDirection={{ base: "column", md: "row" }}>
          <Box
            display={"flex"}
            maxW={{ base: "100%", md: "70%" }}
            flexDirection={"column"}
            paddingRight={{ md: 10 }}
            paddingBottom={{ base: 10, md: 0 }}
            borderRight={{ md: "2px solid white" }}
            borderBottom={{ base: "2px solid white", md: "unset" }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              h={"100%"}
              justifyContent={"space-between"}
            >
              <Text fontSize={30} fontWeight={400}>
                {t("highlightMessage")}
              </Text>
              <Text fontSize={20} fontWeight={400} color={"#939393"}>
                {t("createdBy")}
              </Text>
            </Box>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            paddingLeft={{ md: 10 }}
            paddingTop={{ base: 10, md: 0 }}
            h={"100%"}
            justifyContent={"space-between"}
            gap={6}
          >
            <Box>
              <Text fontSize={30} fontWeight={400}>
                {t("goals.value")}
              </Text>
              <Text fontSize={20} fontWeight={400} color={"#939393"}>
                {t("goals.expectedValue")}
              </Text>
            </Box>
            <Box>
              <Text fontSize={30} fontWeight={400}>
                {t("backers.count")}
              </Text>
              <Text fontSize={20} fontWeight={400} color={"#939393"}>
                {t("backers.backer")}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default Header;
