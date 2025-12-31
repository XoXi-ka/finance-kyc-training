import React from "react";
import { Customer } from "../types/customer";

/**
 * KYCチェックリスト（教育用）
 */
export const KycChecklist: React.FC<{ customer: Customer }> = ({ customer }) => {
  const items = [
    "本人確認書類の有効期限確認",
    "住所変更履歴の確認",
    "取引目的・資金源の妥当性確認",
    "リスクフラグの再評価",
    "記録保存・報告（必要時）"
  ];

  return (
    <div className="card" style={{marginTop: 12}}>
      <h3>KYC チェック項目</h3>
      <ol>
        {items.map((x, i) => (
          <li key={i}>
            {x} {customer.riskLevel === "HIGH" && i >= 2 ? "（重点）" : ""}
          </li>
        ))}
      </ol>
    </div>
  );
};
