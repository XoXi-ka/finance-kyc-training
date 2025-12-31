const TOKEN_KEY = 'fkyt_token'

export function login(username: string, password: string) {
  if (username === 'train' && password === 'train') {
    const token = 'token-' + Date.now()
    localStorage.setItem(TOKEN_KEY, token)
    return { ok: true, token }
  }
  return { ok: false }
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY)
}

export function isAuthenticated() {
  return !!localStorage.getItem(TOKEN_KEY)
}
