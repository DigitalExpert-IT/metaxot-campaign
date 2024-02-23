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
import MenuDrawer from "./MenuDrawer";

interface INavbar {
  data: INavigation[];
}

const MenuList: React.FC<INavbar> = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => (
        <Link key={idx} href={item.link} _hover={{ textDecoration: "none" }}>
          <Text
            fontWeight="bold"
            fontSize="xl"
            _hover={{
              color: "yellow",
            }}
          >
            {item.name}
          </Text>
        </Link>
      ))}
    </>
  );
};

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
            <Box
              display="flex"
              justifyContent={{ base: "start", md: "end" }}
              flex={1}
            >
              <Image
                mx={{ base: 4, md: 0 }}
                src={metaxotLogoUrl}
                alt={"Metaxot Logo"}
                w={{ base: 24, md: "auto" }}
              />
            </Box>
            <Stack
              flex={1}
              justify="end"
              align="center"
              direction="row"
              spacing="4rem"
              display={{ base: "none", md: "flex" }}
            >
              <MenuList data={data} />
              <WalletButton />
            </Stack>
            <MenuDrawer>
              <MenuList data={data} />
              <WalletButton />
            </MenuDrawer>
          </Box>
        </Container>
      </Stack>
    </Center>
  );
};

export default Navbar;
