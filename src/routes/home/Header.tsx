import { Box, Image, Text } from "@chakra-ui/react";
import heroImageUrl from "@/assets/images/hero-image.png";
import { useTranslation } from "react-i18next";
import useFetchContents from "@/hooks/useFetchContents";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const {data, loading} = useFetchContents("headlines")

  return (
    <Box display={"flex"} flexDirection={"column"} gap={24}>
      <Image src={heroImageUrl} alt={"Hero Image"} />
      <Box display={"flex"} flexDirection={{ base: "column", md: "row" }}>
        {!loading && data.map((item, idx) => (
        <><Box
            display={"flex"}
            maxW={{ base: "100%", md: "70%" }}
            flexDirection={"column"}
            paddingRight={{ md: 10 }}
            paddingBottom={{ base: 10, md: 0 }}
            borderRight={{ md: "2px solid white" }}
            borderBottom={{ base: "2px solid white", md: "unset" }}
            key={idx}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              h={"100%"}
              justifyContent={"space-between"}
            >
              <Text fontSize={"3xl"} fontWeight={"normal"}>
                {item.attributes.Title}
              </Text>
              <Text
                fontSize={"xl"}
                fontWeight={"normal"}
                color={"whiteAlpha.700"}
              >
                {t("createdBy")}
              </Text>
            </Box>
          </Box><Box
            display={"flex"}
            flexDirection={"column"}
            paddingLeft={{ md: 10 }}
            paddingTop={{ base: 10, md: 0 }}
            h={"100%"}
            justifyContent={"space-between"}
            gap={6}
          >
              <Box>
                <Text fontSize={"3xl"} fontWeight={"normal"}>
                  {"$ "+item.attributes.PledgeCount}
                </Text>
                <Text
                  fontSize={"xl"}
                  fontWeight={"normal"}
                  color={"whiteAlpha.700"}
                >
                  {item.attributes.PledgeGoal}
                </Text>
              </Box>
              <Box>
                <Text fontSize={"3xl"} fontWeight={"normal"}>
                  {item.attributes.BackerCount}
                </Text>
                <Text
                  fontSize={"xl"}
                  fontWeight={"normal"}
                  color={"whiteAlpha.700"}
                >
                  {t("backers.backer")}
                </Text>
              </Box>
            </Box></>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
