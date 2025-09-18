import React from "react";
import Link from "next/link";
import { Breadcrumbs, Typography } from "@mui/material";

const ProductBreadcrumbs = ({ productName }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2, margin: "50px 0px" }}>
      <Link href="/" style={{ textDecoration: "none", color: "#1976d2" }}>
        Home
      </Link>
      <Typography color="text.primary">{productName}</Typography>
    </Breadcrumbs>
  );
};

export default ProductBreadcrumbs;
