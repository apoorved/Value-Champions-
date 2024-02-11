import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";
import ResponsiveAppBar from "./AppBar";

export const Header = () => {
  return (
    <AppBar
      component={"nav"}
      sx={{
        paddingBottom: "8px",
        marginTop: "16px",
        borderRadius: "0.75rem",
        width: "calc(100% - 48px)",
        zIndex: 3,
        opacity: 1,
        backdropFilter: "blur(8px)",
        background: "#ffffffbd",
        color: "#344767",
        marginBottom: "16px",
        marginLeft: "24px",
        marginRight: "24px",
        letterSpacing: "-0.01562em",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ResponsiveAppBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
