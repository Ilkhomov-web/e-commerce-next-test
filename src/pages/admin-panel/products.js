import React, { useEffect, useState } from 'react'
import AdminLayout from '@/components/Layout/AdminLayout'
import Loading from '@/components/UI/Loading'
import { Box } from '@mui/material'

export default function AdminProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const res = await fetch('/api/products')
        const data = await res.json()
        setProducts(data)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <AdminLayout title="All products">
      {loading ? (
        <Loading label="Loading products..." />
      ) : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {products.map((p) => (
            <Box key={p.id} sx={{ border: '1px solid #eee', p: 2, borderRadius: 1, width: 260 }}>
              <Box component="img" src={p.productImg} alt={p.productName} sx={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 1 }} />
              <div style={{ fontWeight: 600, marginTop: 8 }}>{p.productName}</div>
              <div>${p.price}</div>
            </Box>
          ))}
        </Box>
      )}
    </AdminLayout>
  )
}



