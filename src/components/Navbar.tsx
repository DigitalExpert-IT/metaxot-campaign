import metaxotLogoUrl from "../assets/images/metaxot-logo-white.png";
import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  IconButton,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import WalletButton from "./WalletButton";
import { INavigation } from "@/constant/navigation";
import MenuDrawer from "./MenuDrawer";
import { useTranslation } from "react-i18next";
import useAuth from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { TbUserFilled } from "react-icons/tb";

interface INavbar {
  data: INavigation[];
}

const MenuList: React.FC<INavbar> = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => {
        return (
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
        )
      })}
    </>
  );
};

const Navbar: React.FC<INavbar> = ({ data }) => {
  const { t } = useTranslation();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Center>
      <Stack
        as={"nav"}
        w={"full"}
        position={"absolute"}
        mt={12}
        top={"0"}
        justifyContent={"center"}
      >
        <Container maxW={"container.xl"}>
          <Box display={"flex"} alignItems={"center"}>
            <Box
              display={"flex"}
              justifyContent={{ base: "start", lg: "end" }}
              flex={1}
            >
              <Stack
                flex={1}
                justify={"start"}
                align={"center"}
                direction={"row"}
                spacing={"4rem"}
                display={{ base: "none", lg: "flex" }}
              >
                <MenuList data={data} />
              </Stack>
              <Image
                mx={{ base: 4, lg: 0 }}
                src={metaxotLogoUrl}
                alt={"Metaxot Logo"}
                w={{ base: 24, lg: "auto" }}
              />
            </Box>
            <Stack
              flex={1}
              justify={"end"}
              align={"center"}
              direction={"row"}
              spacing={"4rem"}
              display={{ base: "none", lg: "flex" }}
            >
              <WalletButton />
              <HStack>
              <Button
                type="submit"
                onClick={isAuthenticated ? logout : () => navigate("/login")}
              >
                {t(isAuthenticated ? "logout.title" : "login.title")}
              </Button>
              {isAuthenticated && 
                <IconButton icon={<TbUserFilled color="white"/>} onClick={() => navigate("/profile")} aria-label={"Profile"}/>
              }
              </HStack>
            </Stack>
            <MenuDrawer>
              <MenuList data={data} />
              <WalletButton />
              <Button
                width={"full"}
                type="submit"
                mt={8}
                onClick={isAuthenticated ? logout : () => navigate("/login")}
              >
                {isAuthenticated ? t("logout.title") : t("login.title")}
              </Button>
              {isAuthenticated &&
                <IconButton icon={<TbUserFilled color="white"/>} aria-label={"Profile"}/>
              }
            </MenuDrawer>
          </Box>
        </Container>
      </Stack>
    </Center>
  );
};

export default Navbar;
