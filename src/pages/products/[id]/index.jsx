import { useRouter } from "next/router";
import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import UserLayout from "@/components/Layout/UserLayout";
import AddToCard from "@/components/UI/AddToCard";
import { products } from "@/pages";
import ProductBreadcrumbs from "@/components/UI/Breadcrumbs";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((item) => item.id.toString() === id);
  let calculated = (product.price * product.discount) / 100;
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <UserLayout>
      <ProductBreadcrumbs productName={product.productName} />
      <Box sx={{ marginTop: "50px" }}>
        <Grid container spacing={2} sx={{ display: "flex", alignItems: "top" }}>
          <Grid size={{ md: 4, sm: 3, xs: 3 }} sx={{}}>
            <Box
              component="img"
              src={product.productImg}
              alt="product"
              sx={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>

          <Grid size={{ md: 4, sm: 3, xs: 3 }} sx={{}}>
            <Typography variant="h5">{product.productName}</Typography>
            <Typography sx={{ color: "#a9a9a9", mb: 2 }}>
              {product.productDesc}
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              ${product.price}
            </Typography>

            <Box
              sx={{ display: "flex", gap: "10px", alignItems: "center", mt: 1 }}
            >
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

            <Box sx={{ display: "flex", gap: "10px", mt: 2 }}>
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
          </Grid>

          <Grid
            size={{ md: 4, sm: 3, xs: 3 }}
            sx={{ border: "1px solid #f1f1f1", padding: "20px" }}
          >
            <AddToCard product={product} />
          </Grid>
        </Grid>
      </Box>
    </UserLayout>
  );
};

export default ProductDetails;
