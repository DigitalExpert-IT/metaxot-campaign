import { Box, Circle, Img, Text } from "@chakra-ui/react";
import Hexagonal from "@/components/Hexagonal";
import { useTranslation } from "react-i18next";
import leftTitleShapeUrl from "@/assets/images/title-shape-left.png";
import rightTitleShapeUrl from "@/assets/images/title-shape-right.png";

const Roadmap: React.FC = () => {
  const { t } = useTranslation();

  const getHexagonalStyle = (filled: boolean = true) => ({
    backgroundImage: `${
      filled
        ? "linear-gradient(to right, #3391FF 5%, #FFBFFC 50%, #3391FF)"
        : "linear-gradient(to right, #000, #000)"
    }`,
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
    filter: `
        drop-shadow(2px 0px 0px white)
        drop-shadow(-2px 0px 0px white)
        drop-shadow(0px 2px 0px white)
        drop-shadow(0px -2px 0px white)
        drop-shadow(2px 0px 0px white)
        drop-shadow(-2px 0px 0px white)
      `,
  });

  const getHexagonalContentStyle = (top: number = 0, left: number = 0) =>
    ({
      top: `calc(${top}px - 110px)`,
      left: `calc(${left}px + 30px)`,
      position: "absolute",
      zIndex: "1",
      fontSize: "24px",
      margin: "0 auto",
    } as React.CSSProperties);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      <Box display={"flex"} justifyContent={"center"}>
        <Text
          color={"white"}
          fontFamily={"unlock"}
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
        top={{ base: -150, lg: 0 }}
        minH={{ base: "1400px", lg: "700px" }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          w={"max-content"}
          justifyContent={"center"}
          position={"absolute"}
          h={"max-content"}
        >
          <Box>
            <Hexagonal
              margin={{ marginBottom: "-20px" }}
              customStyle={getHexagonalStyle()}
            />
            <span style={getHexagonalContentStyle(220)}>
              {t("goalOne.value")}
            </span>
            <Text
              style={{ position: "absolute", top: 110, left: 220 }}
              fontSize={"2xl"}
              minW={{ lg: "300px" }}
            >
              {t("goalOne.description")}
            </Text>
          </Box>
          <Box>
            <Hexagonal
              margin={{ marginBottom: "-20px" }}
              customStyle={getHexagonalStyle()}
              top={-100}
              left={60}
            />
            <span style={getHexagonalContentStyle(340, 60)}>
              {t("goalTwo.value")}
            </span>
            <Text
              style={{ position: "absolute", top: 230, left: 220 }}
              fontSize={"2xl"}
              minW={{ lg: "300px" }}
            >
              {t("goalTwo.description")}
            </Text>
          </Box>
          <Box>
            <Hexagonal
              margin={{ marginBottom: "-20px" }}
              customStyle={getHexagonalStyle()}
              top={-200}
            />
            <span style={getHexagonalContentStyle(460)}>
              {t("goalThree.value")}
            </span>
            <Text
              style={{ position: "absolute", top: 350, left: 220 }}
              fontSize={"2xl"}
              minW={{ lg: "300px" }}
            >
              {t("goalThree.description")}
            </Text>
          </Box>
          <Box>
            <Hexagonal
              margin={{ marginBottom: "-20px" }}
              customStyle={getHexagonalStyle()}
              top={-300}
              left={60}
            />
            <span style={getHexagonalContentStyle(580, 60)}>
              {t("goalFour.value")}
            </span>
            <Text
              style={{ position: "absolute", top: 470, left: 220 }}
              fontSize={"2xl"}
              minW={{ lg: "300px" }}
            >
              {t("goalFour.description")}
            </Text>
          </Box>
          <Box>
            <Hexagonal
              margin={{ marginBottom: "-20px" }}
              customStyle={getHexagonalStyle()}
              top={-400}
            />
            <span style={getHexagonalContentStyle(700)}>
              {t("goalFive.value")}
            </span>
            <Text
              style={{ position: "absolute", top: 590, left: 220 }}
              fontSize={"2xl"}
              minW={{ lg: "300px" }}
            >
              {t("goalFive.description")}
            </Text>
          </Box>
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
          top={{ base: "55%", lg: 0 }}
        >
          <Box>
            <Hexagonal
              margin={{ marginBottom: "-20px" }}
              customStyle={getHexagonalStyle()}
            />
            <span style={getHexagonalContentStyle(220)}>
              {t("goalSix.value")}
            </span>
            <Text
              style={{ position: "absolute", top: 110, left: 220 }}
              fontSize={"2xl"}
              minW={{ lg: "300px" }}
            >
              {t("goalSix.description")}
            </Text>
          </Box>
          <Box>
            <Hexagonal
              margin={{ marginBottom: "-20px" }}
              customStyle={getHexagonalStyle(false)}
              top={-100}
              left={60}
            />
            <span style={getHexagonalContentStyle(340, 60)}>
              {t("goalSeven.value")}
            </span>
            <Text
              style={{ position: "absolute", top: 230, left: 220 }}
              fontSize={"2xl"}
              minW={{ lg: "300px" }}
            >
              {t("goalSeven.description")}
            </Text>
          </Box>
          <Box>
            <Hexagonal
              margin={{ marginBottom: "-20px" }}
              customStyle={getHexagonalStyle(false)}
              top={-200}
            />
            <span style={getHexagonalContentStyle(460)}>
              {t("goalEight.value")}
            </span>
            <Text
              style={{ position: "absolute", top: 350, left: 220 }}
              fontSize={"2xl"}
              minW={{ lg: "300px" }}
            >
              {t("goalEight.description")}
            </Text>
          </Box>
          <Box>
            <Hexagonal
              margin={{ marginBottom: "-20px" }}
              customStyle={getHexagonalStyle(false)}
              top={-300}
              left={60}
            />
            <span style={getHexagonalContentStyle(580, 60)}>
              {t("goalNine.value")}
            </span>
            <Text
              style={{ position: "absolute", top: 470, left: 220 }}
              fontSize={"2xl"}
              minW={{ lg: "300px" }}
            >
              {t("goalNine.description")}
            </Text>
          </Box>
          <Box>
            <Hexagonal
              margin={{ marginBottom: "-20px" }}
              customStyle={getHexagonalStyle(false)}
              top={-400}
            />
            <span style={getHexagonalContentStyle(700)}>
              {t("goalTen.value")}
            </span>
            <Text
              style={{ position: "absolute", top: 590, left: 220 }}
              fontSize={"2xl"}
              minW={{ lg: "300px" }}
            >
              {t("goalTen.description")}
            </Text>
          </Box>
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
