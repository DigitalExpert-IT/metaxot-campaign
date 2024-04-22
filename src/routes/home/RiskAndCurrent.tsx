import SectionTitle from "@/components/SectionTitle";
import { Box, Img, Text } from "@chakra-ui/react";
import imgSupportUsUrl from "@/assets/images/support-us.png";
import useFetchContents from "@/hooks/useFetchContents";

const RiskAndCurrent = () => {
  const {data, loading} = useFetchContents("current-statuses")
  const {data: challengeData, loading: loadingChallenge} = useFetchContents("risk-and-challenges")

  return (
    <Box>
      {!loading && data.map((item, idx) => ( 
      <>
        <SectionTitle title={item.attributes.Header} key={idx}/><Text fontSize={"xl"} mt={14} textAlign={"justify"}>
          {item.attributes.Caption}
        </Text>
      </>
      ))}
      <Box display={"flex"} justifyContent={"center"} my={10}>
        <Img src={imgSupportUsUrl} />
      </Box>
      {!loadingChallenge && challengeData.map((item, idx) => (
      <>
        <SectionTitle title={item.attributes.Header} my={20} key={idx}/><Text fontSize={"xl"} mt={14} textAlign={"justify"}>
          {item.attributes.Caption}
        </Text>
      </>
      ))}
    </Box>
  );
};

export default RiskAndCurrent;
