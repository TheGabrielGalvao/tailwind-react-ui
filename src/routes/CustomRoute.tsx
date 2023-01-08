import { useContext } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Page } from "../interfaces/ui/navigation";

interface CustomRouteProps {
  routeItem?: Page
}

export const CustomRoute = ({routeItem}: CustomRouteProps) => {
  const { signed } = useAuth()
  return signed ? <Outlet /> : <Navigate to="/signin" />
};
