import { MOCK_CUSTOMERS } from "./mockDb";
import { Customer, SearchCondition } from "../types/customer";

function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function mockLogin(userId: string, password: string) {
  await sleep(400);
  if (userId === "train" && password === "train") {
    return { token: "dummy-token-kyc-training" };
  }
  throw new Error("ユーザーIDまたはパスワードが違います。");
}

export async function searchCustomers(cond: SearchCondition): Promise<Customer[]> {
  await sleep(350);
  const keyword = (cond.keyword ?? "").trim();
  const risk = cond.riskLevel ?? "ALL";

  return MOCK_CUSTOMERS.filter((c) => {
    const hitKeyword =
      keyword.length === 0 ||
      c.id.includes(keyword) ||
      c.nameKana.includes(keyword) ||
      c.nameKanji.includes(keyword);

    const hitRisk = risk === "ALL" || c.riskLevel === risk;

    return hitKeyword && hitRisk;
  });
}

export async function getCustomerDetail(id: string): Promise<Customer | null> {
  await sleep(250);
  return MOCK_CUSTOMERS.find((c) => c.id === id) ?? null;
}
