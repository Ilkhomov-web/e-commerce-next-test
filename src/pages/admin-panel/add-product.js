import React, { useEffect, useMemo, useState } from "react";
import AdminLayout from "@/components/Layout/AdminLayout";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";

function generateRandomId() {
  return Math.random().toString(36).slice(2, 10);
}

export default function AdminAddProductPage() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [price, setPrice] = useState("");
  const [hasDiscount, setHasDiscount] = useState(false);
  const [discountPercent, setDiscountPercent] = useState("");
  const [deliveredTime, setDeliveredTime] = useState("");
  const [rate, setRate] = useState("");
  const [sold, setSold] = useState("");
  const [productImg, setProductImg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [productId, setProductId] = useState("");

  useEffect(() => {
    setProductId(generateRandomId());
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const payload = {
        id: productId,
        productName,
        productDescription,
        price: Number(price) || 0,
        discount: hasDiscount ? { active: true, percent: Number(discountPercent) || 0 } : { active: false, percent: 0 },
        deliveredTime,
        rate: Number(rate) || 0,
        sold: Number(sold) || 0,
        productImg,
      };

      const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        throw new Error('Failed to save');
      }

      setProductName("");
      setProductDescription("");
      setPrice("");
      setHasDiscount(false);
      setDiscountPercent("");
      setDeliveredTime("");
      setRate("");
      setSold("");
      setProductImg("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AdminLayout title="Add product">
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 720 }}>
        <Stack spacing={2.5}>
          <Typography variant="body2" color="text.secondary">
            Product ID: {productId}
          </Typography>

          <TextField
            label="Product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Product description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            multiline
            minRows={3}
            fullWidth
          />

          <TextField
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            fullWidth
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
          />

          <FormControlLabel
            control={
              <Switch
                checked={hasDiscount}
                onChange={(e) => setHasDiscount(e.target.checked)}
              />
            }
            label="Has discount?"
          />

          {hasDiscount && (
            <TextField
              label="Discount percent"
              type="number"
              value={discountPercent}
              onChange={(e) => setDiscountPercent(e.target.value)}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              inputProps={{ min: 0, max: 100 }}
              fullWidth
            />
          )}

          <TextField
            label="Delivered time"
            placeholder="e.g., 2-4 days"
            value={deliveredTime}
            onChange={(e) => setDeliveredTime(e.target.value)}
            fullWidth
          />

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              label="Rate"
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              inputProps={{ min: 0, max: 5, step: 0.1 }}
              fullWidth
            />
            <TextField
              label="Sold"
              type="number"
              value={sold}
              onChange={(e) => setSold(e.target.value)}
              inputProps={{ min: 0, step: 1 }}
              fullWidth
            />
          </Stack>

          <TextField
            label="Product image URL"
            value={productImg}
            onChange={(e) => setProductImg(e.target.value)}
            fullWidth
          />

          <Stack direction="row" spacing={2}>
            <Button type="submit" variant="contained" disabled={submitting}>
              {submitting ? "Saving..." : "Save product"}
            </Button>
            <Button type="button" variant="outlined" onClick={() => {
              setProductName("");
              setProductDescription("");
              setPrice("");
              setHasDiscount(false);
              setDiscountPercent("");
              setDeliveredTime("");
              setRate("");
              setSold("");
              setProductImg("");
            }}>Clear</Button>
          </Stack>
        </Stack>
      </Box>
    </AdminLayout>
  );
}


