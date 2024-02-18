import metaxotLogoUrl from "../assets/images/metaxot-logo-white.png";
import { Box, Container, Image, Link, Stack, Text } from "@chakra-ui/react";
import { INavigation } from "../constant/navigation";
import WalletButton from "./WalletButton";

interface INavbar {
  data: INavigation[];
}

const Navbar: React.FC<INavbar> = ({ data }) => {
  return (
    <Stack
      as="nav"
      w={"90vw"}
      position={"fixed"}
      mt={12}
      top={"0"}
      justifyContent="center"
    >
      <Container maxW="container.xl">
        <Box display="flex" alignItems="center">
          <Box display="flex" justifyContent={"end"} flex={1}>
            <Image src={metaxotLogoUrl} />
          </Box>
          <Stack
            flex={1}
            justify="end"
            align="center"
            direction="row"
            spacing="4rem"
            display={{ base: "none", md: "flex" }}
          >
            {data.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                _hover={{ textDecoration: "none" }}
              >
                <Text
                  fontWeight="bold"
                  fontSize="lg"
                  _hover={{
                    color: "yellow",
                  }}
                >
                  {item.name}
                </Text>
              </Link>
            ))}
            <WalletButton />
          </Stack>
        </Box>
      </Container>
    </Stack>
  );
};

export default Navbar;
