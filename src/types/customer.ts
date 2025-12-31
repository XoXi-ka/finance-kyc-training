/** 顧客情報の型（KYC教育用） */
export type RiskLevel = "LOW" | "MEDIUM" | "HIGH";

export interface Customer {
  id: string;                 // 顧客ID
  nameKana: string;           // 氏名（カナ）
  nameKanji: string;          // 氏名（漢字）
  birthDate: string;          // 生年月日
  nationality: string;        // 国籍
  address: string;            // 住所
  occupation: string;         // 職業
  riskLevel: RiskLevel;       // リスク評価
  lastReviewDate: string;     // 最終KYCレビュー日
  flags: string[];            // リスクフラグ
}

export interface SearchCondition {
  keyword?: string;           // 顧客ID/氏名キーワード
  riskLevel?: RiskLevel | "ALL";
}
