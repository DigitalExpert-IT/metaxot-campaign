import SectionTitle from "@/components/SectionTitle";
import { Box, Text } from "@chakra-ui/react";
import { FAQ } from "@/constant/faqList";

const Faq = () => {
  return (
    <Box id="FAQ">
      <SectionTitle title={"Faq"} />
      {FAQ.map((item, idx) => (
        <Box key={idx}>
            <Text fontSize={"2xl"} mt={14} textAlign={"justify"} fontWeight={"bold"}>
              {item.question}
            </Text>
            <Text fontSize={"xl"} mt={14} textAlign={"justify"}>
                  {item.answer}
            </Text>
        </Box>
      ))}
    </Box>
  );
};

export default Faq;
