import React from "react";
import { Customer } from "../types/customer";

/** 顧客一覧カード */
export const CustomerCard: React.FC<{
  customer: Customer;
  onClick: () => void;
}> = ({ customer, onClick }) => {
  return (
    <div className="card" style={{cursor:"pointer"}} onClick={onClick}>
      <h3>{customer.nameKanji}（{customer.nameKana}）</h3>
      <div>ID：{customer.id}</div>
      <div>リスク：<b>{customer.riskLevel}</b></div>
      <div>最終レビュー：{customer.lastReviewDate}</div>
      {customer.flags.length > 0 && (
        <div style={{marginTop: 8}}>
          フラグ：{customer.flags.join(" / ")}
        </div>
      )}
    </div>
  );
};
