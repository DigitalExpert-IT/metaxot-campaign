import { ICardWithImageTitle } from "@/constant/bakeOurProject";
import { Box, Text, Img } from "@chakra-ui/react";
import { t } from "i18next";

const CardWithImageTitle = (props: ICardWithImageTitle) => {
  const { title, subtitle, price, imageUrl, onClick } = props;

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      backgroundColor={"#939393"}
      borderRadius={30}
      justifyContent={"flex-between"}
      alignItems={"center"}
      gap={40}
      paddingX={10}
      cursor={"pointer"}
      _hover={{
        backgroundColor: "#434343"
      }}
      onClick={onClick}
    >
      <Img
        src={imageUrl}
        display={{ base: "none", md: "block" }}
        alt={title}
        paddingTop={4}
        maxW={236}
      />
      <Box display={"flex"} flexDirection={"column"} textAlign={"center"}>
        <Text color={"white"} fontSize={"3xl"}>
          {t(title, {price: price ?? 0})}
        </Text>
        <Text color={"#FFBFFC"} fontSize={"2xl"} maxW={400}>
          {subtitle}
        </Text>
      </Box>
    </Box>
  );
};

export default CardWithImageTitle;
