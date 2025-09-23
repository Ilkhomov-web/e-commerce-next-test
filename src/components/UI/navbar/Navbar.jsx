import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import SearchInput from "./SearchInput";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MessageIcon from "@mui/icons-material/Message";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <Box
      sx={{
        padding: "20px 0px",
        boxShadow: "10px 0px 45px -30px black",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        background: "#ffffff90",
        backdropFilter: "blur(100px)",
      }}
    >
      <Container maxWidth={"xl"} sx={{}}>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid
            size={{ md: 2, sm: 3, xs: 3 }}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component={"img"}
              src={
                "https://justmelanin.shop/cdn/shop/files/Black_and_White_Initial_Letter_Fashion_Brand_Logo-removebg-preview.png?v=1739640791&width=500"
              }
              width={"100px"}
            ></Box>
          </Grid>
          <Grid size={{ md: 6, sm: 3, xs: 3 }} sx={{}}>
            <SearchInput />
          </Grid>
          <Grid
            size={{ md: 4, sm: 3, xs: 3 }}
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Button sx={{ color: "black" }}>
              <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
            </Button>
            <Button sx={{ color: "black" }}>
              <ShoppingCartIcon sx={{ fontSize: "25px" }} />
              <Typography
                sx={{
                  background: "red",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  color: "white",
                  position: "absolute",
                  top: "0px",
                  right: "10px",
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {cart.products.length}
              </Typography>
            </Button>
            <Button sx={{ color: "black" }}>
              <MessageIcon sx={{ fontSize: "25px" }} />
            </Button>
            <Button
              sx={{
                gap: "10px",

                color: "black",
                padding: "5px 10px",
              }}
            >
              <Typography>Login</Typography>
              <LoginIcon sx={{ fontSize: "25px" }} />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
