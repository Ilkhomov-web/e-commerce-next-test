import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "@/store/slices/cartSlice";

const AddToCard = (prop) => {
  const dispatch = useDispatch();
  const { products, totalAmount } = useSelector((state) => state.cart);
  const { product } = prop;

  const cartItem = products.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.productName,
        price: product.price,
        image: product.productImg,
      })
    );
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box
            component={"img"}
            src={product.productImg}
            sx={{ width: "70px", borderRadius: "12px" }}
          ></Box>
          {product.productName}
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          In Stock <CheckIcon sx={{ color: "green" }} />{" "}
        </Typography>
      </Box>
      <hr
        style={{
          width: "100%",
          border: "1px solid #f1f1f1",
          margin: "20px 0px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Quantity</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            border: "1px solid #f1f1f1",
            padding: "5px 20px",
            borderRadius: "12px",
          }}
        >
          <Typography>{quantity}</Typography>
          <Button
            onClick={() => dispatch(decrementQuantity(product.id))}
            disabled={quantity === 0}
          >
            -
          </Button>
          <Button onClick={() => dispatch(incrementQuantity(product.id))}>
            +
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Typography>SubTotal</Typography>
        <Typography sx={{ fontSize: "25px", fontWeight: "600" }}>
          $
          {cartItem
            ? (cartItem.price * cartItem.quantity).toFixed(2)
            : product.price.toFixed(2)}
        </Typography>
        {/* <Typography
          sx={{
            color: "#a7a7a7",
            textDecoration: "line-through",
            position: "absolute",
            right: "220px",
            top: "390px",
          }}
        >
          Rp 4500
        </Typography> */}
      </Box>
      <Button sx={{ border: "1px solid #1976d2" }} onClick={handleAddToCart}>
        <ShoppingCartIcon /> Add To Cart
      </Button>
      <Button sx={{ background: "#1976d2", color: "white" }}>Buy Now</Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            borderRight: "1px solid #1976d2",
            paddingRight: "15px",
          }}
        >
          <FavoriteBorderIcon />
          Wishlist
        </Typography>
        <Typography
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <ShareIcon />
          Share
        </Typography>
      </Box>
    </Box>
  );
};

export default AddToCard;
