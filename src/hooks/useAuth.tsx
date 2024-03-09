import Cookies from "js-cookie";
import axiosRef from "./axiosRef";
import { useAsyncCall } from "@/hooks/useAsyncCall";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterForm {
  email: string;
  password: string;
  passwordConfirmatiom: string;
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

  const { exec: login, isLoadingLogin } = useAsyncCall(
    async ({ email, password }: ILoginForm) => {
      try {
        const response = await axiosRef.post("/login", {
          email,
          password,
        });

        const { authorizationToken, user } = response.data.result;
        Cookies.set("token", authorizationToken);
        localStorage.setItem("userData", JSON.stringify(user));

        navigate(-1);
        return { successMessage: t("login.success") };
      } catch (error) {
        throw new Error("Authentication failed");
      }
    }
  );

  const { exec: register, isLoadingRegister } = useAsyncCall(
    async ({ email, password, passwordConfirmation }: IRegisterForm) => {
      try {
        const response = await axiosRef.post("/register", {
          email,
          password,
          passwordConfirmation,
        });

        //TO-DO: Send verify email from UI (?)
        const { message, confirmationCode } = response.data.result;

        navigate(-1);
        return { successMessage: message };
      } catch (error) {
        throw new Error("Authentication failed");
      }
    }
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
