import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { searchItems } from '../services/api'
import { Item } from '../types'

const List: React.FC = () => {
  const [items, setItems] = useState<Item[]>([])
  const [params] = useSearchParams()
  const q = params.get('q') ?? undefined

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const res = await searchItems(q)
      if (mounted) setItems(res)
    })()
    return () => {
      mounted = false
    }
  }, [q])

  return (
    <div>
      <h1>列表</h1>
      <ul>
        {items.map((it) => (
          <li key={it.id}>
            <Link to={`/detail/${it.id}`}>{it.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
