import React from "react";
import { Box, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarIcon from "@mui/icons-material/Star";

const ProductCard = (prop) => {
  const { product } = prop;
  const { price, discount } = product;

  let calculated = (price * discount) / 100;

  return (
    <Box
      sx={{
        width: "350px",
        // boxShadow: "10px 1px 50px -10px gray",
        borderRadius: "12px",
        border: "1px solid #f1f1f1",
        cursor: "pointer",
      }}
    >
      <Box
        component={"img"}
        sx={{ borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
        width={"100%"}
        src={product.productImg}
      ></Box>
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography variant="h5">{product.productName}</Typography>
        <Typography variant="main" sx={{ color: "#a9a9a9" }}>
          {product.productDesc}
        </Typography>
        <Typography variant="h5" fontWeight={"bold"}>
          ${product.price}
        </Typography>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Typography
            sx={{
              background: "#ffdede",
              color: "#ff2424",
              width: "50px",
              textAlign: "center",
              borderRadius: "3px",
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            {product.discount}%
          </Typography>
          <Typography
            sx={{
              color: "#a7a7a7",
              textDecoration: "line-through",
              fontSize: "18px",
            }}
          >
            ${calculated}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              background: "green",
              width: "110px",
              gap: "10px",
              justifyContent: "center",
              borderRadius: "5px",
            }}
          >
            <LocalShippingIcon sx={{ color: "white" }} />
            <Typography color="white">{product.deliveredTime}</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Typography
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                borderRight: "1px solid gray",
                paddingRight: "12px",
              }}
            >
              <StarIcon sx={{ color: "gold" }} />
              {product.rate}
            </Typography>
            <Typography>Sold {product.sold}+</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
