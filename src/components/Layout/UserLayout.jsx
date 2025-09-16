import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "../UI/navbar/Navbar";

export default function UserLayout({ children, title = "My site" }) {
  return (
    <Box>
      <Navbar />
      <Container component="main" maxWidth={"xl"} sx={{ background: "gray" }}>
        {children}
      </Container>
    </Box>
  );
}
