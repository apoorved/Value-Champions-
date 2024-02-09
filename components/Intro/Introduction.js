import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export const Introduction = () => {
  return (
    <Box
      opacity={1}
      shadow="none"
      variant="contained"
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "top",
        display: "grid",
        placeItems: "center",
        backgroundImage: `url('/office.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "2.25rem",
                fontWeight: 700,
                letterSpacing: "-0.01562em",
                color: "#FFFFFF",
                "@media (min-width: 600px)": {
                  fontSize: "3rem",
                },
              }}
            >
              Charting Business Together
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: 6,
                fontSize: "1.125rem",
                lineHeight: 1.6,
                color: "#A0AEC0",
              }}
            >
              We are dedicated to providing taxation advisory (GST & Income Tax), ROC compliances, formation of LLP
              and companies along with their yearly compliances, startup certificates (DPIIT) and other government
              registrations including UDYAM, ESI RPF, 80G and 12A for trusts, Patents and Trademarks at reasonable costs.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
