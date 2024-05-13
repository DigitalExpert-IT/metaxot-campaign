import Cookies from "js-cookie";
import axiosRef from "./axiosRef";
import { useAsyncCall } from "@/hooks/useAsyncCall";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useBackerPackage } from "./useBackerContract";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface IUserData {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
}

const useAuth = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { resetListPackage } = useBackerPackage();
  const toast = useToast();
  const [token, setToken] = useState<string | null>(
    Cookies.get("token") || null
  );

  useEffect(() => {
    const checkCookie = setInterval(() => {
      const updatedValue = Cookies.get("token");
      if (!updatedValue) {
        setToken(null);
      }

      if (updatedValue !== token) {
        setToken(updatedValue || "");
      }
    }, 1000);

    return () => {
      clearInterval(checkCookie);
    };
  }, [token]);

  const { exec: login, isLoading: isLoadingLogin } = useAsyncCall(
    async ({ email, password }: ILoginForm) => {
      try {
        const response = await axiosRef.post("/login", {
          email,
          password,
        });

        const { authorizationToken, user } = response.data.result;
        Cookies.set("token", authorizationToken);
        localStorage.setItem("userData", JSON.stringify(user));

        resetListPackage();
        navigate("/");
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
    t("login.success")
  );

  const { exec: register, isLoading: isLoadingRegister } = useAsyncCall(
    async ({ email, password, passwordConfirmation }: IRegisterForm) => {
      try {
        const response = await axiosRef.post("/register", {
          email,
          password,
          passwordConfirmation,
        });
        const { message, confirmationCode: confirmationLink } =
          response.data.result;

        return { successMessage: message, confirmationLink };
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
    t("register.success")
  );

  const userData = () => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("userData");
      if (user) {
        return JSON.parse(user) as IUserData;
      }
    }

    return null;
  };

  const logout = () => {
    Cookies.remove("token");
    localStorage.removeItem("userData");

    toast({ status: "success", description: "Logout Success" });
  };

  return {
    login,
    isLoadingLogin,
    register,
    isLoadingRegister,
    isAuthenticated: !!token,
    logout,
    userData: userData(),
  };
};

export default useAuth;
