import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../services/api'
import { Item } from '../types'

const Detail: React.FC = () => {
  const { id } = useParams()
  const [item, setItem] = useState<Item | null>(null)

  useEffect(() => {
    if (!id) return
    let mounted = true
    ;(async () => {
      const res = await getItem(id)
      if (mounted) setItem(res)
    })()
    return () => {
      mounted = false
    }
  }, [id])

  if (!item) return <div>未找到条目或正在加载...</div>

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  )
}

export default Detail
