import metaxotLogoUrl from "../assets/images/metaxot-logo-white.png";
import {
  Box,
  Center,
  Container,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import WalletButton from "./WalletButton";
import { INavigation } from "@/constant/navigation";

interface INavbar {
  data: INavigation[];
}

const Navbar: React.FC<INavbar> = ({ data }) => {
  return (
    <Center>
      <Stack
        as="nav"
        w={"full"}
        position={"absolute"}
        mt={12}
        top={"0"}
        justifyContent="center"
      >
        <Container maxW="container.xl">
          <Box display="flex" alignItems="center">
            <Box display="flex" justifyContent={"end"} flex={1}>
              <Image src={metaxotLogoUrl} alt={"Metaxot Logo"} />
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
    </Center>
  );
};

export default Navbar;
