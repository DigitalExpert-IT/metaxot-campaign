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
  </React.StrictMode>
);
