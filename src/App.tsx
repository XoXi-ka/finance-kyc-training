import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LessonPage from "./pages/LessonPage";
import TestPage from "./pages/TestPage";

import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";

function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar">
      <Link className={isActive("/")} to="/">Home</Link>
      <Link className={isActive("/lesson")} to="/lesson">Lesson</Link>
      <Link className={isActive("/test")} to="/test">Test</Link>
      <Link className={isActive("/login")} to="/login">Login</Link>
      <Link className={isActive("/list")} to="/list">List</Link>
      <Link className={isActive("/detail")} to="/detail">Detail</Link>
      <Link className={isActive("/search")} to="/search">Search</Link>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* 页面主容器（全局美化） */}
      <div className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lesson" element={<LessonPage />} />
          <Route path="/test" element={<TestPage />} />

          {/* 功能页 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
