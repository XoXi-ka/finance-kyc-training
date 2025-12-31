import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCustomerDetail } from "../services/api";
import { Customer } from "../types/customer";
import { KycChecklist } from "../components/KycChecklist";

const DetailPage: React.FC = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async ()=>{
      setLoading(true);
      const res = await getCustomerDetail(id!);
      setCustomer(res);
      setLoading(false);
    })();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!customer) return <div className="card">顧客が見つかりません。</div>;

  return (
    <div>
      <div className="card">
        <h2>顧客詳細（{customer.id}）</h2>
        <div className="row">
          <div>
            <b>氏名</b>：{customer.nameKanji}（{customer.nameKana}）
          </div>
          <div>
            <b>生年月日</b>：{customer.birthDate}
          </div>
        </div>
        <div className="row" style={{marginTop:6}}>
          <div><b>国籍</b>：{customer.nationality}</div>
          <div><b>職業</b>：{customer.occupation}</div>
        </div>
        <div style={{marginTop:6}}>
          <b>住所</b>：{customer.address}
        </div>
        <div style={{marginTop:6}}>
          <b>リスク評価</b>：<span style={{fontWeight:800}}>{customer.riskLevel}</span>
        </div>
        <div style={{marginTop:6}}>
          <b>最終レビュー日</b>：{customer.lastReviewDate}
        </div>
        <div style={{marginTop:6}}>
          <b>リスクフラグ</b>：{customer.flags.length ? customer.flags.join(" / ") : "なし"}
        </div>

        <div style={{marginTop:10}}>
          <button className="btn" onClick={()=>nav(-1)}>一覧へ戻る</button>
          <button className="btn" style={{marginLeft:8}} onClick={()=>nav("/search")}>検索へ戻る</button>
        </div>
      </div>

      <KycChecklist customer={customer} />
    </div>
  );
};
export default DetailPage;
