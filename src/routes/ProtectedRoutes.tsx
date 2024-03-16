import useAuth from "@/hooks/useAuth";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRoute {
  children: ReactNode;
}

const ProtectedRoutes: React.FC<IProtectedRoute> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

export default ProtectedRoutes;
