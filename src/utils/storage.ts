const KEY = "kyc_training_token";

/** トークン保存 */
export function saveToken(token: string) {
  localStorage.setItem(KEY, token);
}

/** トークン取得 */
export function loadToken(): string | null {
  return localStorage.getItem(KEY);
}

/** ログアウト */
export function clearToken() {
  localStorage.removeItem(KEY);
}
