import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const CategoryCard = (prop) => {
  const { item } = prop;

  return (
    <Box
      sx={{
        width: "310px",
        height: "410px",
        backgroundImage: `url(${item.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={item.link} style={{ textDecoration: "none" }}>
        <Typography
          variant="h4"
          sx={{
            color: "white",
          }}
        >
          {item.text}
        </Typography>
      </Link>
    </Box>
  );
};

export default CategoryCard;
