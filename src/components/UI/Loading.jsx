import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = ({ label = "Loading..." }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <CircularProgress size={20} />
      <Typography color="text.secondary">{label}</Typography>
    </Box>
  );
};

export default Loading;
