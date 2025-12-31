import { Customer } from "../types/customer";

/**
 * モックDB：研修用の疑似顧客データ
 */
export const MOCK_CUSTOMERS: Customer[] = [
  {
    id: "C0001",
    nameKana: "ヤマダ タロウ",
    nameKanji: "山田 太郎",
    birthDate: "1985-04-12",
    nationality: "JP",
    address: "東京都千代田区1-1-1",
    occupation: "会社員",
    riskLevel: "LOW",
    lastReviewDate: "2025-09-01",
    flags: []
  },
  {
    id: "C0002",
    nameKana: "サトウ ハナコ",
    nameKanji: "佐藤 花子",
    birthDate: "1990-11-02",
    nationality: "JP",
    address: "東京都新宿区2-2-2",
    occupation: "自営業",
    riskLevel: "MEDIUM",
    lastReviewDate: "2025-07-15",
    flags: ["住所変更あり", "取引頻度増加"]
  },
  {
    id: "C0003",
    nameKana: "リ ショウ",
    nameKanji: "李 想",
    birthDate: "1978-01-20",
    nationality: "CN",
    address: "東京都豊島区3-3-3",
    occupation: "投資家",
    riskLevel: "HIGH",
    lastReviewDate: "2025-06-10",
    flags: ["高額送金", "PEP疑い", "海外取引多"]
  }
];
