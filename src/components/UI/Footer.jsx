import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#f8f9fa",
        borderTop: "1px solid #e0e0e0",
        mt: 6,
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* Left Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              MyShop
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              The best place to buy your favorite products online. Fast delivery
              and trusted service.
            </Typography>
          </Grid>

          {/* Middle Section - Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Link href="/" underline="hover" sx={{ color: "text.secondary" }}>
                Home
              </Link>
              <Link
                href="/products"
                underline="hover"
                sx={{ color: "text.secondary" }}
              >
                Products
              </Link>
              <Link
                href="/about"
                underline="hover"
                sx={{ color: "text.secondary" }}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                underline="hover"
                sx={{ color: "text.secondary" }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Right Section - Contact & Social */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Email: support@myshop.com
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Phone: +998 90 123 45 67
            </Typography>
            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{ color: "#E4405F" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://t.me"
                target="_blank"
                sx={{ color: "#0088cc" }}
              >
                <TelegramIcon />
              </IconButton>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{ color: "#1877F2" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{ color: "#1DA1F2" }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Line */}
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            pt: 2,
            borderTop: "1px solid #e0e0e0",
          }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            © {new Date().getFullYear()} MyShop. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
