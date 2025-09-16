"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Button } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../../styles/SwiperHeader.module.css";

const data = [
  {
    id: 1,
    img: "https://graphicsfamily.com/wp-content/uploads/edd/2024/11/Creative-E-Commerce-Shoes-Banner-Design-Free-PSD--scaled.jpg",
  },
  {
    id: 2,
    img: "https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design.jpg",
  },
  {
    id: 3,
    img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/nike-shoes-facebook-ad-design-template-3feddc44f949d144553f31630a701ac7_screen.jpg",
  },
  {
    id: 4,
    img: "https://static.vecteezy.com/system/resources/previews/008/564/775/non_2x/sport-shoes-banner-for-website-with-button-ui-design-illustration-vector.jpg",
  },
  {
    id: 5,
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtdw1aIPVP6HIYevObQJ-7lr5mIuY9u50OMDsJxYgOAw6ejcuKlyN618d_26BbunWPtpUL4sDWujbmp3UlL-LiEXKScRzcUR99dtgUYfS7qeHJmh-1go5lKlrt2uF_pIVyXmtKp5GjQ7TWJDfW6OnoUEoVgAXqrAkLRZ2yEs7r04G9mn2ITGbmy4bn/s1280/Banner%20Design.webp",
  },
];

const SwiperHeader = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className={`${styles.mySwiper} swiper`}
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          className={`${styles.swiperSlide} swiper`}
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Button
            sx={{
              background: "#0BA6DF",
              color: "white",
              position: "absolute",
              bottom: "50px",
              fontSize: "25px",
            }}
          >
            See Now !!!
          </Button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperHeader;
