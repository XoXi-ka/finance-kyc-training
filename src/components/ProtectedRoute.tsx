import React from "react";
import { Navigate } from "react-router-dom";
import { loadToken } from "../utils/storage";

/**
 * 認証ガード
 * tokenが無い場合はLoginへ戻す
 */
export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = loadToken();
  if (!token) return <Navigate to="/login" replace />;
  return <>{children}</>;
};
