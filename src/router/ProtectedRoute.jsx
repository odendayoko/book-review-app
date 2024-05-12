import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

// 課題では使わないけど、これでログインしていないユーザーがトップページにアクセスした場合は、ログインページにリダイレクトさせる
export const ProtectedRoute = ({ children, redirectPath = "/login" }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
