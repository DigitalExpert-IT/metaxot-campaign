import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { getErrorMessage } from "@/utils/error";

/**
 * this hooks will simplify the integration between
 * async function call with react loading, data, and error state
 * the error will be automatically displayed as toast
 * @param fn async function
 * @param successMessage success message that will be showed using toast
 */
export const useAsyncCall = <T, A extends any[]>(
  fn: (...args: A) => Promise<T>,
  successMessage?: string | null,
  successCb?: () => any
) => {
  const [state, setState] = useState<{
    isLoading: boolean;
    data: null | T;
  }>({
    isLoading: false,
    data: null as T,
  });
  const toast = useToast();

  const exec = async (...args: A) => {
    //this code can be simplyfy using toast promise chakra ui
    const loadingToast = toast({ status: "loading", description: "Loading", duration: null })
    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      loadingToast
      const data = await fn(...args);
      setState((prev) => ({ ...prev, data }));
      if (successMessage)
        toast({ status: "success", description: successMessage });
      successCb?.();
      return data as T;
    } catch (error: any) {
      const formattedErrorMessage = getErrorMessage(error);
      toast({ status: "error", description: formattedErrorMessage });
    } finally {
      toast.close(loadingToast)
      setState((prev) => ({ ...prev, isLoading: false }));

    }
    return {} as T;
  };

  return { ...state, exec };
};
