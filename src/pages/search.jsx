import React, { useEffect, useState } from "react";
import UserLayout from "@/components/Layout/UserLayout";
import { Box, Typography } from "@mui/material";
import Loading from "@/components/UI/Loading";
import ProductCard from "@/components/Cards/ProductCard";
import { useRouter } from "next/router";

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (q === undefined) return;
    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/products?q=${encodeURIComponent(q || "")}`
        );
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [q]);

  return (
    <UserLayout title="Search">
      <Box sx={{ py: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Search results for: "{q || ""}"{" "}
          {loading ? "(loading)" : `(${products.length})`}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {loading ? (
            <Loading label="Searching..." />
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </Box>
        {!loading && products.length === 0 && (
          <Typography color="text.secondary" sx={{ mt: 2 }}>
            Nothing found.
          </Typography>
        )}
      </Box>
    </UserLayout>
  );
}
