import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit">
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/form" style={{ color: "white" }}>
                Employee form
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
