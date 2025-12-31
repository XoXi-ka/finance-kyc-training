import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { searchCustomers } from "../services/api";
import { Customer } from "../types/customer";
import { CustomerCard } from "../components/CustomerCard";

const ListPage: React.FC = () => {
  const nav = useNavigate();
  const [params] = useSearchParams();
  const [list, setList] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  const keyword = params.get("keyword") ?? "";
  const riskLevel = (params.get("riskLevel") as any) ?? "ALL";

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await searchCustomers({ keyword, riskLevel });
      setList(res);
      setLoading(false);
    })();
  }, [keyword, riskLevel]);

  return (
    <div className="page-container">
      
      {/* 条件卡片 */}
      <div className="card" style={{ marginBottom: 20 }}>
        <h2>検索結果一覧</h2>
        <div style={{ fontSize: 14, color: "#555" }}>
          <strong>条件：</strong>
          keyword＝{keyword || "なし"} ／ risk＝{riskLevel}
        </div>

        <button
          className="btn"
          style={{ marginTop: 12 }}
          onClick={() => nav("/search")}
        >
          条件を修正
        </button>
      </div>

      {loading && <div>Loading...</div>}

      {!loading && list.length === 0 && (
        <div className="card">該当顧客がありません。</div>
      )}

      {/* 结果列表 */}
      <div style={{ display: "grid", gap: 12 }}>
        {list.map((c) => (
          <CustomerCard
            key={c.id}
            customer={c}
            onClick={() => nav(`/detail/${c.id}`)}
          />
        ))}
      </div>

    </div>
  );
};

export default ListPage;
