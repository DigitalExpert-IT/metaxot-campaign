import "./locales/index.ts";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NiceModal from "@ebay/nice-modal-react";
import axios from "axios";
import theme from "./theme/index.ts";
import Home from "./routes/home/Home.tsx";
import Login from "./routes/login/Login.tsx";
import Register from "./routes/register/Register.tsx";
import NotFound from "./routes/notFound/NotFound.tsx";

import {
  ThirdwebProvider,
  metamaskWallet,
  phantomWallet,
  trustWallet,
} from "@thirdweb-dev/react";
import { getActiveChain } from "./lib/chain";
import Profile from "./routes/profile/Profile.tsx";

const targetChain = getActiveChain();  
const CLIENT_ID = import.meta.env.VITE_PUBLIC_THIRDWEB;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "profile",
    element: <Profile/>
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultQueryFn = async ({ queryKey }: any) => {
  const { data } = await axios.get(`/api/${queryKey[0]}`);
  return data;
};
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThirdwebProvider
      supportedChains={[targetChain]}
      supportedWallets={[metamaskWallet(), trustWallet(), phantomWallet()]}
      activeChain={targetChain}
      clientId={CLIENT_ID}
    >
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Suspense fallback={<></>}>
            <NiceModal.Provider>
              <RouterProvider router={router} />
            </NiceModal.Provider>
          </Suspense>
        </QueryClientProvider>
      </ChakraProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
