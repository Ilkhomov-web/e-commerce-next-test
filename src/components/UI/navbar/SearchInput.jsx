import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from "@mui/icons-material/List";

const SearchInput = () => {
  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid #e5e5e5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "12px",
      }}
    >
      <Button
        sx={{
          width: "190px",
          borderRight: "1px solid #e5e5e5",
          height: "56px",
          borderRadius: "0px",
          display: "flex",
          gap: "10px",
          alignItems: "center",
          borderTopLeftRadius: "12px",
          borderBottomLeftRadius: "12px",
          color: "black",
        }}
      >
        <ListIcon sx={{ fontSize: "26px" }} />
        <Typography>Category</Typography>
      </Button>
      <TextField
        fullWidth
        placeholder={"Search..."}
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
          },
        }}
      />

      <Button
        sx={{
          borderLeft: "1px solid #e5e5e5",
          height: "56px",
          borderRadius: "0px",
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px",
          color: "black",
        }}
      >
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default SearchInput;
