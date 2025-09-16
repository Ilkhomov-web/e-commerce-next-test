import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from "@mui/icons-material/List";

const SearchInput = () => {
  return (
    <Box sx={{ width: "100%", background: "pink" }}>
      <Button>
        <ListIcon />
        <Typography>Category</Typography>
      </Button>
      <TextField />
      <Button>
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default SearchInput;
