import React, { useState } from "react";
import UserLayout from "@/components/Layout/UserLayout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "next/link";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      // TODO: integrate with your auth API
      await new Promise((resolve) => setTimeout(resolve, 800));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <UserLayout title="Create account">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ py: 6 }}
      >
        <Box component="section" sx={{ width: "100%", maxWidth: 420 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create account
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={2.5}>
              <TextField
                label="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
                autoComplete="name"
              />
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                autoComplete="email"
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                autoComplete="new-password"
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                size="large"
              >
                {isSubmitting ? "Creating..." : "Create account"}
              </Button>
            </Stack>
          </Box>

          <Typography variant="body2" sx={{ mt: 2.5 }}>
            Already have an account? <Link href="/sign-in">Sign in</Link>
          </Typography>
        </Box>
      </Box>
    </UserLayout>
  );
}
