import React from "react";

import { Box, Container, Grid, Typography } from "@mui/material";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <Box sx={{ background: "green" }}>
      <Container maxWidth={"xl"} sx={{ background: "yellow" }}>
        <Grid container spacing={2}>
          <Grid size={{ md: 2, sm: 3, xs: 3 }} sx={{ background: "red" }}>
            <Typography variant="h4" fontWeight={"bold"}>
              Online Shop
            </Typography>
          </Grid>
          <Grid size={{ md: 6, sm: 3, xs: 3 }} sx={{ background: "red" }}>
            <SearchInput />
          </Grid>
          <Grid size={{ md: 4, sm: 3, xs: 3 }} sx={{ background: "red" }}>
            s
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
