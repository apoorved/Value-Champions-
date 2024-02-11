import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <Box component="footer">
      <Container>
        <Grid container spacing={1}  >
          <Grid item xs={12} md={4} sx={{ ml: "auto", mb: 1 }}>
            <Box
              component="img"
              src={"/apple-touch-icon.png"}
              alt={"logo"}
              maxWidth="1.5rem"
              mb={1}
              style={{ borderRadius: "50%" }}
            ></Box>
            <Typography fontWeight={"bold"} variant="h6">
              Value Champions LLP
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ ml: "auto", mb: 1 }}>
            <Typography variant="body1" color="dark" opacity={0.8}>
             Contact us:-
            </Typography>
            <Typography variant="body2" color="dark" opacity={0.8}>
            Email: valuechampionsllp@gmail.com
            </Typography>
            <Typography variant="body2" color="dark" opacity={0.8}>
            Mobile: +916393863951
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
