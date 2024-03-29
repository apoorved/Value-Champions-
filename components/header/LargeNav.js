import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

export const LargeNav = ({ pages }) => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        fontSize={"3vw"}
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none"},
          flexGrow: 1,
          fontWeight: "bold",
          paddingLeft: 10,
        }}
      >
        Value Champions LLP
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-end",
        }}
      >
        {pages.map((page) => (
          <Button
            key={page.label}
            sx={{ my: 2, color: "#344767", display: "block" }}
            href={page.link}
            target="_blank" rel="noopener noreferrer"
          >
            {page.label}
          </Button>
        ))}
      </Box>
    </>
  );
};
