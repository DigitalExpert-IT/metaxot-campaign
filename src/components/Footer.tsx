import {
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import metaxotLogoUrl from "../assets/images/metaxot-logo-white.png";
import { FooterNav } from "@/constant/navigation";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container maxW={"container.xl"} py={20}>
      <Flex
        justifyContent={"space-between"}
        direction={{ base: "column", md: "row" }}
        align={"center"}
      >
        <VStack
          h={"inherit"}
          justifyContent={"space-between"}
          alignItems={{ base: "center", md: "flex-end" }}
        >
          <Flex gap={8} align={"center"}>
            <Image
              mx={{ base: 4, md: 0 }}
              src={metaxotLogoUrl}
              alt={"Metaxot Logo"}
              w={{ base: 24, md: "auto" }}
            />
            <Heading>{t("footer.title")}</Heading>
          </Flex>
          <Text fontSize={"12px"} color={"#FFBFFC"}>
            {t("footer.copyright")}
          </Text>
        </VStack>

        <VStack
          gap={5}
          alignItems={{ base: "center", md: "flex-end" }}
          mt={{ base: 20, md: 0 }}
        >
          {FooterNav.map((link) => (
            <Link key={link.name} display={"block"} href={link.link} color={"#FFBFFC"}>
              <Text fontSize={"24px"} color={"#FFBFFC"}>
                {link.name}
              </Text>
            </Link>
          ))}
        </VStack>
      </Flex>
    </Container>
  );
};

export default Footer;
