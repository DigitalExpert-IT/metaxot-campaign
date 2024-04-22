import SectionTitle from "@/components/SectionTitle";
import { Box, Text } from "@chakra-ui/react";
import useFetchContents from "@/hooks/useFetchContents";

const Faq = () => {
  const {data, loading} = useFetchContents("faq-contents")


  return (
    <Box id="FAQ">
      <SectionTitle title={"Faq"} />
      {!loading && data.map((item, idx) => (
        <Box key={idx}>
            <Text fontSize={"2xl"} mt={14} textAlign={"justify"} fontWeight={"bold"}>
              {item.attributes.Header}
            </Text>
            <Text fontSize={"xl"} mt={14} textAlign={"justify"}>
                  {item.attributes.Caption}
            </Text>
        </Box>
      ))}
    </Box>
  );
};

export default Faq;
