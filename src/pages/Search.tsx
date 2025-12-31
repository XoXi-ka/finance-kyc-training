import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchItems } from '../services/api'
import { Item } from '../types'

const Search: React.FC = () => {
  const [q, setQ] = useState('')
  const [results, setResults] = useState<Item[]>([])
  const nav = useNavigate()

  const doSearch = async () => {
    const res = await searchItems(q)
    setResults(res)
    if (res.length === 1) nav(`/detail/${res[0].id}`)
  }

  return (
    <div>
      <h1>搜索</h1>
      <div>
        <input placeholder="输入关键字" value={q} onChange={(e) => setQ(e.target.value)} />
        <button onClick={doSearch}>搜索</button>
      </div>
      <ul>
        {results.map((r) => (
          <li key={r.id}>
            <a onClick={() => nav(`/detail/${r.id}`)}>{r.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Search
