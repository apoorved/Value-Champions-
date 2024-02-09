"use client";

import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Fade } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export const MobileNav = ({ pages }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Typography
        variant="h6"
        noWrap
        fontSize={"medium"}
        fontColor={"#090f1b"}
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontWeight: "bold",
        }}
      >
        Value Champions
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{borderRadius: "50%"}}
        >
          <Image
            src={"/apple-touch-icon.png"}
            alt="Company Icon"
            width={32}
            height={32}
            margin="0 0 0 0"
            style={{borderRadius: "50%"}}
          />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
            backdropFilter: "blur(1px)",
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page.label} TransitionComponent={Fade}>
              <Link href={page.link}>
                <Typography textAlign="center">{page.label}</Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};