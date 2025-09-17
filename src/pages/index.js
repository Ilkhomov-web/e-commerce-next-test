import CategoryCard from '@/components/Cards/CategoryCard';
import ProductCard from '@/components/Cards/ProductCard';
import UserLayout from '@/components/Layout/UserLayout'
import SwiperHeader from '@/components/UI/swiper/Swiper'
import { Box, Typography } from "@mui/material";

import React from 'react'

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

const products = [
  {
    id: 1,
    productName: "Wireless Headphones",
    productDesc:
      "High quality product with modern design, durable materials, comfortable usage, and suitable for daily lifestyle needs.",
    price: 120,
    discount: 15,
    deliveredTime: "3 hours",
    rate: 4.5,
    sold: 87,
    productImg: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    productName: "Smartphone",
    productDesc:
      "High quality product with modern design, durable materials, comfortable usage, and suitable for daily lifestyle needs.",
    price: 900,
    discount: 10,
    deliveredTime: "6 hours",
    rate: 4.8,
    sold: 142,
    productImg: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    productName: "Gaming Mouse",
    productDesc:
      "High quality product with modern design, durable materials, comfortable usage, and suitable for daily lifestyle needs.",
    price: 45,
    discount: 5,
    deliveredTime: "2 hours",
    rate: 4.2,
    sold: 65,
    productImg: "https://picsum.photos/400/300?random=3",
  },
  {
    id: 4,
    productName: "Laptop",
    productDesc:
      "High quality product with modern design, durable materials, comfortable usage, and suitable for daily lifestyle needs.",
    price: 1200,
    discount: 12,
    deliveredTime: "1 day",
    rate: 4.7,
    sold: 210,
    productImg: "https://picsum.photos/400/300?random=4",
  },
  {
    id: 5,
    productName: "Smartwatch",
    productDesc:
      "High quality product with modern design, durable materials, comfortable usage, and suitable for daily lifestyle needs.",
    price: 250,
    discount: 20,
    deliveredTime: "4 hours",
    rate: 4.3,
    sold: 99,
    productImg: "https://picsum.photos/400/300?random=5",
  },
  {
    id: 6,
    productName: "Bluetooth Speaker",
    productDesc:
      "High quality product with modern design, durable materials, comfortable usage, and suitable for daily lifestyle needs.",
    price: 80,
    discount: 8,
    deliveredTime: "3 hours",
    rate: 4.1,
    sold: 54,
    productImg: "https://picsum.photos/400/300?random=6",
  },
  {
    id: 7,
    productName: "Mechanical Keyboard",
    productDesc:
      "High quality product with modern design, durable materials, comfortable usage, and suitable for daily lifestyle needs.",
    price: 100,
    discount: 10,
    deliveredTime: "5 hours",
    rate: 4.6,
    sold: 77,
    productImg: "https://picsum.photos/400/300?random=7",
  },
  {
    id: 8,
    productName: "Drone",
    productDesc:
      "High quality product with modern design, durable materials, comfortable usage, and suitable for daily lifestyle needs.",
    price: 500,
    discount: 18,
    deliveredTime: "8 hours",
    rate: 4.4,
    sold: 63,
    productImg: "https://picsum.photos/400/300?random=8",
  },
]

const Home = () => {
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
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </Box>
        </Box>
      </Box>
    </UserLayout>
  )
}

export default Home
