import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // 全体スタイル。無いと白屏原因になるので必ず存在させる

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
