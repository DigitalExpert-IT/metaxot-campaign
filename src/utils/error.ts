import { t } from "i18next";
import uppercaseFirstLetter from "./string";

const format = (message?: string | null) => {
  if (!message) return message;

  if (message.match(/auth\//)) {
    const messageWithoutAuth = message.replace(/auth\//, "");

    if (messageWithoutAuth)
      return uppercaseFirstLetter(messageWithoutAuth.replaceAll("-", " "));
  }

  return message
    .replace(/.+:\s/, "")
    .replace(/revert\s/, "")
    .replace(/\s\(.+/, "");
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getErrorMessage = (error: any) => {
  const errorTemp = `error.errorCode.${error.code}`;
  const errorCode = t(errorTemp);
  if (errorTemp === errorCode) {
    debugger;
    if (error?.reason) return format(error.reason);
    if (error?.data?.message) return format(error.data.message);
    if (error?.message) return format(error.message);
    return "Unknown Error";
  }
  return errorCode;
};
