import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockLogin } from "../services/api";
import { saveToken } from "../utils/storage";

const LoginPage: React.FC = () => {
  const nav = useNavigate();
  const [userId, setUserId] = useState("train");
  const [password, setPassword] = useState("train");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await mockLogin(userId, password);
      saveToken(res.token);
      nav("/search");
    } catch (err: any) {
      setError(err.message ?? "ログインに失敗しました。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container" style={{ maxWidth: 480 }}>
      <div className="card" style={{ padding: "32px" }}>
        <h2 style={{ marginBottom: 4 }}>Finance KYC Training / Login</h2>
        <p style={{ fontSize: 13, color: "#666", marginBottom: 24 }}>
          ※研修用ダミー認証（Demo Login）
        </p>

        <form onSubmit={onSubmit}>
          {/* User ID */}
          <label className="label">ユーザーID</label>
          <input
            className="input"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="ユーザーIDを入力"
          />

          {/* Password */}
          <label className="label" style={{ marginTop: 16 }}>
            パスワード
          </label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワードを入力"
          />

          {/* Error message */}
          {error && (
            <div className="error" style={{ marginTop: 12 }}>
              {error}
            </div>
          )}

          {/* Login button */}
          <button
            className="btn primary"
            style={{ marginTop: 20, width: "100%" }}
            disabled={loading}
          >
            {loading ? "ログイン中..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
