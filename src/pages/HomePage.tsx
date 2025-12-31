import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="card">
      <h2>Finance KYC Training</h2>
      <p>この研修ミニシステムでは、KYCの基本フロー（Login→Search→List→Detail）を体験します。</p>
      <ul>
        <li>React Router v6 による画面遷移</li>
        <li>フォーム入力／状態管理</li>
        <li>モックAPI呼び出し</li>
        <li>顧客照会の典型UI</li>
      </ul>
    </div>
  );
};
export default HomePage;
