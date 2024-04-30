import { Box, Circle, Img, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import leftTitleShapeUrl from "@/assets/images/title-shape-left.png";
import rightTitleShapeUrl from "@/assets/images/title-shape-right.png";
import useFetchContents from "@/hooks/useFetchContents";
import hexagon from "../../assets/images/hexagon.svg"

const Roadmap: React.FC = () => {
  const { t } = useTranslation();
  const {data, loading} = useFetchContents("stretch-goals")

  // const getHexagonalStyle = (filled: boolean = true): BoxProps => ({
  //   backgroundImage: `${
  //     filled
  //       ? "linear-gradient(to right, #3391FF 5%, #FFBFFC 50%, #3391FF)"
  //       : "linear-gradient(to right, #000, #000)"
  //   }`,
  //   bgClip: "text",
  //   textColor: "transparent",
  //   filter: `
  //       drop-shadow(2px 0px 0px white)
  //       drop-shadow(-2px 0px 0px white)
  //       drop-shadow(0px 2px 0px white)
  //       drop-shadow(0px -2px 0px white)
  //       drop-shadow(2px 0px 0px white)
  //       drop-shadow(-2px 0px 0px white)
  //     `,
  // });

  // const getHexagonalContentStyle = (
  //   top: number = 0,
  //   left: number = 0
  // ): BoxProps => ({
  //   top: `calc(${top}px - 110px)`,
  //   left: `calc(${left}px + 30px)`,
  //   position: "absolute",
  //   zIndex: "1",
  //   fontSize: "24px",
  //   margin: "0 auto",
  // });

  const Hexagon = ({color, goal}: {color: string, goal: string}) => {
    return (
      <Box
        w={`100px`}
        h={`100px`}
        position="relative"
      >
        <Img src={hexagon} backgroundSize="cover"
        alt=""
        backgroundPosition="center"
        w="107%"
        h="120%"
        position="absolute"
        top="0"
        left="0"
        zIndex="0"/>
        <Box
          w="95%"
          h="110%"
          mt={"2.5"}
          position="absolute"
          alignItems={"center"}
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          clipPath="polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
          //background={"linear-gradient(to right, #3391FF 5%, #FFBFFC 50%, #3391FF)"}
          background={color}
          display={"flex"}
          justifyContent={"center"}
        >
          <Text color={"white"} fontWeight={"bold"} fontSize={"1.5rem"}>{goal}</Text>
        </Box>
      </Box>
    );
  };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <Box display={"flex"} justifyContent={"center"}>
        <Text
          color={"white"}
          fontFamily={"Unlock"}
          lineHeight={"3"}
          fontSize={"3xl"}
          fontWeight={700}
        >
          {t("stretchGoals")}
        </Text>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Circle size={"15px"} bgColor={"#3391FF"} mr={-1}></Circle>
        <hr
          style={{
            width: "6%",
            borderTop: "4px solid",
            borderImage: "radial-gradient(#FFBFFC, #3391FF) 3 0 0 0",
          }}
        />
        <Circle size={"15px"} bgColor={"#3391FF"} ml={-1}></Circle>
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center", lg: "start" }}
        position={"relative"}
        w={"100%"}
        top={{ base: -300, lg: 0 }}
        minH={{ base: "1400px", lg: "700px" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          w={"max-content"}
          position={"absolute"}
          h={"max-content"}
          ml={{lg: "10rem", base: 0}}
          gap={8}
        >
          {!loading && data.slice(0,5).map((item, idx) => (
          <Box key={idx} ml={idx % 2 !== 0 ? "5rem" : 0} display={"flex"} flexDir={"row"} alignItems={"center"}>
            <Box>
            <Hexagon goal={item.attributes.GoalAmount} color={"black"}/>
            </Box>
            <Box>
            <Text
              fontSize={"2xl"}
              minW={{ lg: "300px" }}
              textAlign={"left"}
              ml={"2rem"}
            >
              {item.attributes.Title}
            </Text>
            </Box>
          </Box>
          ))}
        </Box>
        <Box
          borderRight={"1px dashed grey"}
          h={"85%"}
          bottom={30}
          left={{ lg: "50%" }}
          position={"absolute"}
          display={{ base: "none", lg: "block" }}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          w={"max-content"}
          position={"absolute"}
          left={{ lg: "60%" }}
          top={{ base: "75%", lg: 0 }}
          gap={8}
        >
          {!loading && data.slice(5,10).map((item, idx) => (
          <Box key={idx} ml={idx % 2 !== 0 ? "5rem" : 0} display={"flex"} flexDir={"row"} alignItems={"center"}>
            <Box>
            <Hexagon goal={item.attributes.GoalAmount} color={"black"}/>
            </Box>
            <Box>
            <Text
              fontSize={"2xl"}
              minW={{ lg: "300px" }}
              textAlign={"left"}
              ml={"2rem"}
            >
              {item.attributes.Title}
            </Text>
            </Box>
          </Box>
          ))}
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Text fontSize={"2xl"}>{t("releaseVersion")}</Text>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={6}
        >
          <Img
            src={leftTitleShapeUrl}
            maxH={"6px"}
            alt={"A shape at the left side of title"}
          />
          <Text fontSize={"2xl"} fontWeight={"bold"} textAlign={"center"}>
            {t("newIslandPreparation")}
          </Text>
          <Img
            src={rightTitleShapeUrl}
            maxH={"6px"}
            alt={"A shape at the right side of title"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Roadmap;
