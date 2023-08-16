import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { parseAccessToken } from "../constants/parseAccessToken";
import { IDecoded } from "../types/types";

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const accessToken = localStorage.getItem("accessToken");
  let decoded: IDecoded | null = null;
  if (accessToken) {
    decoded = parseAccessToken(accessToken) as IDecoded;
  }

  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (decoded?.userEmail) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
