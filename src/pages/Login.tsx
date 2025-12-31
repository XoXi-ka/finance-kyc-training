import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/auth'

const Login: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const nav = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const res = login(username, password)
    if (res.ok) {
      nav('/search')
    } else {
      setError('用户名或密码错误。使用 ID: train / PASS: train')
    }
  }

  return (
    <div>
      <h1>登录</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>用户名：</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>密码：</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">登录</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>测试账号：ID: <strong>train</strong> / PASS: <strong>train</strong></p>
    </div>
  )
}

export default Login
