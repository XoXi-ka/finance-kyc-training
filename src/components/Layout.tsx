import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearToken, loadToken } from "../utils/storage";

/**
 * 共通レイアウト（ヘッダー/ナビ）
 */
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const nav = useNavigate();
  const token = loadToken();

  const onLogout = () => {
    clearToken();
    nav("/login");
  };

  return (
    <>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/lesson">Lesson</Link>
        <Link to="/test">Test</Link>
        <span style={{marginLeft: 12, fontWeight: 700}}>｜業務フロー｜</span>
        <Link to="/search">Search</Link>
        {token && <button className="btn" onClick={onLogout}>Logout</button>}
      </div>
      <div className="container">{children}</div>
    </>
  );
};
