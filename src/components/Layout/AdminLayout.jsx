import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AdminLayout({ children, title = "Admin" }) {
  const router = useRouter();
  const menu = [
    {
      label: "Dashboard",
      href: "/admin-panel",
      icon: <DashboardOutlinedIcon />,
    },
    {
      label: "All products",
      href: "/admin-panel/products",
      icon: <Inventory2OutlinedIcon />,
    },
    {
      label: "Add product",
      href: "/admin-panel/add-product",
      icon: <AddBoxOutlinedIcon />,
    },
    {
      label: "Orders",
      href: "/admin-panel/orders",
      icon: <ReceiptLongOutlinedIcon />,
    },
  ];

  return (
    <Box display="flex" minHeight="100vh">
      <Box
        component="aside"
        sx={{
          width: 260,
          borderRight: "1px solid #eee",
          p: 2,
          position: "sticky",
          top: 0,
          height: "100vh",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
        >
          Admin Panel
        </Typography>
        <List>
          {menu.map((item) => {
            const active = router.pathname === item.href;
            return (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  selected={active}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Container component="main" maxWidth="xl" sx={{ py: 3, flexGrow: 1 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {title}
        </Typography>
        {children}
      </Container>
    </Box>
  );
}
