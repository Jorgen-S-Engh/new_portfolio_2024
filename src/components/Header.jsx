import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function HeaderMenu() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "transparent",
        border: "0px",
        boxShadow: "none",
        bgcolor: "#000000",
      }}
    >
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}></Typography>
        <Box>
          <Button className="header-button" href="#home">
            Home
          </Button>
          <Button className="header-button" href="#about">
            About
          </Button>
          <Button className="header-button" href="#projects">
            Projects
          </Button>
          <Button className="header-button" href="#contact">
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderMenu;
