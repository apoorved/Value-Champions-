import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
export const Mission = () => {
  return (
    <Box component="section" py={{ xs: 0, sm: 12 }}>
      <Box
        variant="gradient"
        sx={{
          background: "linear-gradient(45deg, #000000, #808080)",
          position: "relative",
          borderRadius: "xl",
          opacity: 1,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Add shadow for depth
        }}
      >
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid
            container
            item
            xs={12}
            md={7}
            justifyContent="center"
            mx="auto"
            textAlign="center"
          >
            <Typography variant="h3" color="white" opacity= '1'>
              Our Mission
            </Typography>
            <Typography variant="body2" color="white" mt={2} mb={4}>
            We believe in a client-centric approach, tailoring our services to meet the unique needs and
            objectives of each organization. Our seasoned consultants work closely with clients to
            understand their challenges, develop strategic roadmaps, and execute effective solutions.
            {/* For us to have a clear understanding of your requirements, we invite you to fill
            the <a href="https://your-google-form-url" target="_blank" rel="noopener noreferrer"style={{ color: "#B3E5FC" }}>
            Google form</a> and send your response. */}
            </Typography>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
