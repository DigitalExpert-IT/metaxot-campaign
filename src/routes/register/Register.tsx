import { useRef, useState } from "react";
import {
  Box,
  Container,
  Text,
  FormControl,
  Input,
  FormLabel,
  Button,
  Image,
  InputGroup,
  InputRightElement,
  Tooltip,
} from "@chakra-ui/react";
import { FramerBox } from "@/components/animation";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth, { IRegisterForm } from "@/hooks/useAuth";
import metaxotLogoUrl from "@/assets/images/metaxot-logo-white.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";


const Register = () => {
  const buttonSubmitRef = useRef<HTMLButtonElement>(null);
  const { register: _register, isLoadingRegister } = useAuth();
  const [ show, setShow ] = useState(false)
  const [ showPassword, setShowPassword ] = useState(false)

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    passwordConfirmation: Yup.string()
      .required("Confirm Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters")
      .oneOf([Yup.ref("password")], "Passwords do not match")
  });

  
  const { register, handleSubmit, formState: {errors}} = useForm<IRegisterForm>({
    mode: "all",
    // @ts-expect-error no problem in operation, although type error appears.
    resolver: yupResolver(formSchema)
  });
  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    const response = await _register(data);

    if (response.confirmationLink)
      setConfirmationLink(response.confirmationLink);
  };
  const { t } = useTranslation();
  const [confirmationLink, setConfirmationLink] = useState("");
  const navigate = useNavigate();

  console.log("validation data", errors.password?.message, errors.passwordConfirmation?.message)

  return (
    <Box
      backgroundImage={
        "https://ik.imagekit.io/msxxxaegj/metashot/metaxot-lobby.jpg?updatedAt=1706614894307"
      }
      backgroundPosition={"bottom center"}
      color={"whiteAlpha.700"}
      backgroundSize={{ base: "cover", lg: "100%" }}
    >
      <Box
        position={"fixed"}
        top={0}
        left={0}
        width={"full"}
        height={"full"}
        backgroundColor={"#000"}
        opacity={0.6}
        zIndex={1}
      ></Box>
      <Container
        position={"relative"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        maxW={"container.sm"}
        minH={"100vh"}
        zIndex={2}
        overflow={"hidden"}
      >
        <FramerBox
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          // @ts-expect-error no problem in operation, although type error appears.
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          position={"relative"}
          minW={400}
          p={8}
          pb={16}
          padding={"8px 8px"}
          backgroundImage={"linear-gradient(-45deg, #00ffff, #5500aa, #0099ff)"}
          boxShadow={"0px 0px 20px #5500ff"}
          borderRadius={"lg"}
          backgroundSize={"400% 400%"}
        >
          <Box
            position={"absolute"}
            width={"600px"}
            height={"300px"}
            left={"-25%"}
            marginX={"auto"}
            bottom={"-248px"}
            transform={"perspective(10px) rotateX(2deg)"}
            backgroundImage={
              "linear-gradient(180deg, #5500aa, transparent, transparent)"
            }
            pointerEvents={"none"}
            zIndex={1024}
          ></Box>
          <Box
            p={8}
            pt={8}
            pb={12}
            backgroundImage={
              "linear-gradient(90deg, #171923, #212733, #171923)"
            }
            border={"none"}
            borderRadius={"lg"}
            boxShadow={"inset 0 0 10px black"}
          >
            <Image width={16} src={metaxotLogoUrl} alt="logo" />
            <Box textAlign={"center"} mb={4}>
              <Text fontSize={"4xl"}>{t("register.title")}</Text>
            </Box>
            <Box>
              {confirmationLink ? (
                <Box>
                  <Text>
                    {t("register.confirmRegistration")}{" "}
                    <Box
                      as={"a"}
                      href={confirmationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      color={"blue.500"}
                      onClick={() => navigate("/login")}
                    >
                      {t("register.here")}
                    </Box>
                  </Text>
                </Box>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      placeholder="Email"
                      boxShadow={"inset 0 0 10px #55009a"}
                      {...register("email")}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Tooltip label={errors.password?.message}>
                    <InputGroup>
                      <Input
                        type={show ? "text" : "password"}
                        placeholder="Password"
                        // @ts-expect-error no problem in operation, although type error appears.
                        name="password"
                        boxShadow={"inset 0 0 10px #55009a"}
                        {...register("password")}
                      />
                    <InputRightElement onClick={() => setShow(!show)}>
                        {show ? <ViewIcon/> : <ViewOffIcon/>}
                      </InputRightElement>
                    </InputGroup>
                    </Tooltip>
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Password Confirmation</FormLabel>
                    <Tooltip label={errors.passwordConfirmation?.message}>
                      <InputGroup>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password Confirmation"
                          // @ts-expect-error no problem in operation, although type error appears.
                          name="passwordConfirmation"
                          boxShadow={"inset 0 0 10px #55009a"}
                          {...register("passwordConfirmation")}
                        />
                          <InputRightElement onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                          </InputRightElement>
                      </InputGroup>
                    </Tooltip>
                  </FormControl>
                  <Button
                    width={"full"}
                    ref={buttonSubmitRef}
                    type="submit"
                    colorScheme="blue"
                    isLoading={isLoadingRegister}
                    mt={8}
                  >
                    {t("register.title")}
                  </Button>
                  <Box mt={2}>
                    <Text>
                      {t("register.accountExist")}
                      <Text as={"span"} color={"blue.500"} ml={2}>
                        <Link to={"/login"}>{t("register.clickHere")}</Link>
                      </Text>
                    </Text>
                  </Box>
                </form>
              )}
            </Box>
          </Box>
        </FramerBox>
      </Container>
    </Box>
  );
};

export default Register;
