import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { clientConfig } from "./configs/clientConfig";
import { Done } from "@mui/icons-material";
export const Clients = () => {
  return (
    <Box
      variant="contained"
      component={"section"}
      py={{ xs: 12, sm: 12 }}
      display={{ xs: "block", md: "flex" }}
    >
      <Container>
        <Grid container item xs={6} mx="auto">
          <Box textAlign="center" variant="contained">
            <Typography variant="h3" mt={6} mb={3}>
              Industries we serve:
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {clientConfig.map(({ label, icon: Icon }) => (
                <Grid item key={label} xs={6} lg={4}>
                  <Typography
                    display="block"
                    variant="h3"
                    color={"dark"}
                    textGradient={true}
                  >
                    <Icon/>
                  </Typography>
                  <Typography mt={-0.625}>{label}</Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
