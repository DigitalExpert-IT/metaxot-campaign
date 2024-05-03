import { ICardWithImageTitle } from "@/constant/bakeOurProject";
import { Box, Text } from "@chakra-ui/react";

const CardWithBackgroundImage = (props: ICardWithImageTitle) => {
  const { title, price, imageUrl, description, onClick } = props;

  return (
    <Box
      display={"flex"}
      flexDirection={{base: "row", lg: "column"}}
      backgroundColor={"#939393"}
      borderRadius={30}
      alignItems={"center"}
      borderColor={"#FFBFFC"}
      boxShadow={"0 0 10px #FFBFFC"}
      borderWidth={"3px"}
      gap={100}
      paddingX={10}
      cursor={"pointer"}
      _hover={{
        backgroundColor: "#434343"
      }}
      backgroundImage={imageUrl}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      onClick={onClick}
    >
      <Box display={"flex"} flexDirection={"column"} textAlign={"center"} p={5} gap={5}>
        <Text color={"white"} fontSize={"3xl"}>
          {"$"+price.div(10 ** 6).toNumber() ?? 0}
        </Text>
        <Text color={"white"} fontSize={"2xl"} maxW={200} alignSelf={"center"}>
          {title}
        </Text>
        <Text color={"white"} fontSize={"lg"} maxW={200}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default CardWithBackgroundImage;
