import { useRouter } from "next/router";
import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import UserLayout from "@/components/Layout/UserLayout";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <UserLayout>
      <Box sx={{ marginTop: "50px" }}>
        <Grid container spacing={2}>
          <Grid size={{ md: 4, sm: 3, xs: 3 }} sx={{ background: "green" }}>
            <Box
              component="img"
              src="https://picsum.photos/400/300?random=1"
              alt="product"
              sx={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>

          <Grid size={{ md: 4, sm: 3, xs: 3 }} sx={{ background: "green" }}>
            <Typography variant="h5">Lorem, ipsum.</Typography>
            <Typography sx={{ color: "#a9a9a9", mb: 2 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,
              obcaecati!
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              $5200
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
                4.5
              </Typography>
              <Typography>Sold 100+</Typography>
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
                10%
              </Typography>
              <Typography
                sx={{
                  color: "#a7a7a7",
                  textDecoration: "line-through",
                  fontSize: "18px",
                }}
              >
                $25
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ md: 4, sm: 3, xs: 3 }} sx={{ background: "green" }}>
            <Box sx={{ background: "red", height: "200px" }}>
              Pastdagi content joyi (reviews, recommendations va h.k.)
            </Box>
          </Grid>
        </Grid>
      </Box>
    </UserLayout>
  );
};

export default ProductDetails;
