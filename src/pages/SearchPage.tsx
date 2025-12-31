import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchCondition } from "../types/customer";

const SearchPage: React.FC = () => {
  const nav = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [riskLevel, setRiskLevel] =
    useState<SearchCondition["riskLevel"]>("ALL");

  const onSearch = () => {
    const q = new URLSearchParams();
    if (keyword.trim()) q.set("keyword", keyword.trim());
    if (riskLevel && riskLevel !== "ALL") q.set("riskLevel", riskLevel);
    nav(`/list?${q.toString()}`);
  };

  return (
    <div className="page-container" style={{ maxWidth: 520 }}>
      <div className="card" style={{ padding: 28 }}>
        <h2 style={{ marginBottom: 4 }}>顧客検索（契約照会）</h2>
        <p style={{ fontSize: 13, color: "#666", marginBottom: 20 }}>
          ID / 氏名（カナ / 漢字）で検索可能
        </p>

        {/* Keyword */}
        <div className="form-group" style={{ marginBottom: 16 }}>
          <label className="label">検索キーワード</label>
          <input
            className="input"
            placeholder="例：C0001 / 山田 / ヤマダ"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        {/* Risk Level */}
        <div className="form-group" style={{ marginBottom: 20 }}>
          <label className="label">リスクレベル</label>
          <select
            className="input"
            value={riskLevel}
            onChange={(e) => setRiskLevel(e.target.value as any)}
          >
            <option value="ALL">ALL</option>
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </select>
        </div>

        <button
          className="btn primary"
          style={{ width: "100%", padding: "10px 0" }}
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
