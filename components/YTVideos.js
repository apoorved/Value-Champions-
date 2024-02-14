import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { ytConfig } from "./configs/ytConfig";

export const YTVideos = () => {
  return (
    <Grid container spacing={1} sx={{ mb: 10, mt: 1, padding: 1 }}>
      <Grid item xs={12} lg={3}>
        <Box position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <Typography variant="h4" fontWeight="bold" mb={1}
          sx={{ fontFamily: 'Arial', fontSize: '2.5rem', color: '#333', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', }}>
            Our Youtube!
          </Typography>
          <Typography
            variant="body2"
            fontWeight="regular"
            mb={1}
            pr={2}
            sx={{
              fontFamily: 'Arial, sans-serif',
              fontSize: '1rem',
              lineHeight: '1.5',
              color: '#666',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
            }}
          >
            Subscribe our Youtube for Financial news, tips and advices!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={2}>
        {ytConfig.map(video => (
          <Grid item xs={12} md={6} sx={{ mb: 1 }} key={video.title}>
            <CardMedia
              component="iframe"
              title={video.title}
              src={video.link}
              sx={{ width: "100%", aspectRatio: "16 / 9", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px", }}
              allowFullScreen="allowfullscreen"
              allow="accelerometer"
            />
          </Grid>))}
        </Grid>
      </Grid>
    </Grid>
  );
};
