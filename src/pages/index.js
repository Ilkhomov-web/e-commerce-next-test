import CategoryCard from '@/components/Cards/CategoryCard';
import ProductCard from '@/components/Cards/ProductCard';
import UserLayout from '@/components/Layout/UserLayout'
import SwiperHeader from '@/components/UI/swiper/Swiper'
import { Box, Typography } from "@mui/material";

import React, { useEffect, useState } from 'react'
import Loading from '@/components/UI/Loading'

const categoryData = [
  {
    id: 1,
    img: '/newcomer.png',
    text: 'NewComer',
    link: '/new-comer'
  },
  {
    id: 2,
    img: '/men.png',
    text: 'Men',
    link: '/men'
  },
  {
    id: 3,
    img: '/women.png',
    text: 'Women',
    link: '/women'
  },
  {
    id: 4,
    img: '/kids.png',
    text: 'Kids',
    link: '/kids'
  }
];

const initialProducts = []

const Home = () => {
  const [products, setProducts] = useState(initialProducts)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const res = await fetch('/api/products')
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        // ignore for now
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])
  return (
    <UserLayout>
      <SwiperHeader />
      <Box sx={{ display: "flex", flexDirection: 'column',   alignItems: 'center', margin: '50px 0px'}}>
        <Typography variant='h2'>Just do it</Typography>
        <Typography variant='h5' color='#a7a7a7'>Captures messages that stands for more than just sport. </Typography>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px'}}>
        {categoryData.map((item)=>(
          <CategoryCard item={item} key={item.id} />
        ))}
        </Box>
        <Box sx={{display: "flex", flexDirection: 'column',   alignItems: 'center', margin: '100px 0px'}}>
          <Typography variant='h2'>All Product</Typography>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px', flexWrap: 'wrap', gap: '40px'}}>
            {loading ? (
              <Loading label="Loading products..." />
            ) : (
              products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))
            )}
          </Box>
        </Box>
      </Box>
    </UserLayout>
  )
}

export default Home
