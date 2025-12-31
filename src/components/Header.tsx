import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout, isAuthenticated } from '../services/auth'

const Header: React.FC = () => {
  const nav = useNavigate()
  const handleLogout = () => {
    logout()
    nav('/login')
  }

  return (
    <header>
      <nav>
        <Link to="/search">Search</Link>
        <Link to="/list">List</Link>
        <span style={{ marginLeft: 12 }}>
          {isAuthenticated() ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </span>
      </nav>
    </header>
  )
}

export default Header
