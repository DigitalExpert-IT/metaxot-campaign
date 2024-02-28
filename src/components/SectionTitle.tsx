import { Box, BoxProps, Flex, Heading, Img } from "@chakra-ui/react";
import rightTitleShapeUrl from "@/assets/images/title-shape-right.png";

interface ISectionTitle extends BoxProps {
  title: string;
}

const SectionTitle = (props: ISectionTitle) => {
  const { title, ...rest } = props;

  return (
    <Box {...rest}>
      <Flex alignItems={"center"} gap={6}>
        <Heading
          color={"white"}
          fontFamily={"Unlock"}
          lineHeight={"3"}
          fontSize={"3xl"}
          fontWeight={700}
        >
          {title}
        </Heading>
        <Img src={rightTitleShapeUrl} alt={title} maxH={"6px"} />
      </Flex>
    </Box>
  );
};

export default SectionTitle;
