import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "../UI/navbar/Navbar";

export default function UserLayout({ children, title = "My site" }) {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Header */}
      <Navbar />

      {/* Main content */}
      <Container component="main" maxWidth="xl" sx={{ flexGrow: 1, py: 0 }}>
        {children}
      </Container>
    </Box>
  );
}
