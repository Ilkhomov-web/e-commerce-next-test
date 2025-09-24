import React from "react";
import UserLayout from "@/components/Layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "@/store/slices/cartSlice";

export default function BasketPage() {
  const dispatch = useDispatch();
  const { products, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  const handleRemove = (id) => dispatch(removeFromCart(id));
  const handleClear = () => dispatch(clearCart());

  return (
    <UserLayout title="Basket">
      <Box sx={{ py: 6 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Your Basket
        </Typography>

        {products.length === 0 ? (
          <Typography color="text.secondary">Basket bo‘sh.</Typography>
        ) : (
          <Box>
            <Stack spacing={2}>
              {products.map((item) => (
                <Box
                  key={item.id}
                  sx={{ display: "flex", gap: 2, alignItems: "center" }}
                >
                  <Box
                    component="img"
                    src={item.image || item.productImg}
                    alt={item.title || item.productName}
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: 2,
                      objectFit: "cover",
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography fontWeight={600}>
                      {item.title || item.productName}
                    </Typography>
                    <Typography color="text.secondary">
                      ${item.price.toFixed(2)}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      border: "1px solid #eee",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1.5,
                    }}
                  >
                    <Button
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      disabled={item.quantity === 0}
                      size="small"
                    >
                      -
                    </Button>
                    <Typography>{item.quantity}</Typography>
                    <Button
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      size="small"
                    >
                      +
                    </Button>
                  </Box>

                  <Typography
                    sx={{ width: 96, textAlign: "right", fontWeight: 600 }}
                  >
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>

                  <IconButton
                    color="error"
                    onClick={() => handleRemove(item.id)}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </Box>
              ))}
            </Stack>

            <Divider sx={{ my: 3 }} />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography color="text.secondary">
                Jami mahsulot: {totalQuantity}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Total: ${totalAmount.toFixed(2)}
                </Typography>
                <Button variant="outlined" color="error" onClick={handleClear}>
                  Clear
                </Button>
                <Button variant="contained">Checkout</Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </UserLayout>
  );
}
