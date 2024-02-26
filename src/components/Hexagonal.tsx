import { Box, BoxProps } from "@chakra-ui/react";

interface IHexagonal extends BoxProps{}

const Hexagonal: React.FC<IHexagonal> = (props) => {
  const {...rest} = props;
  return (
    <Box
        top={0}
        bottom={0}
        left={0}
        right={0}
        fontSize={"160px"}
        color={'transparent'}
        position={"relative"}
        {...rest}
    >
      &#x2B22;
    </Box>
  );
};

export default Hexagonal;
