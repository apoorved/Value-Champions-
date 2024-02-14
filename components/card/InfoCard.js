import { Box, Typography } from "@mui/material";
import React from "react";

export const InfoCard = ({Icon, heading, description}) => {
  return (
    <Box
      opacity={1}
      bgcolor={"light"}
      shadow="none"
      variant="contained"
      display={{ xs: "block", md: "flex" }}
      borderRadius="xl"
      pt={3.5}
      pb={3}
      px={3}
    >
      <Typography
        display="block"
        variant="h3"
        color={"dark"}
        mt={-0.625}
      >
        <Icon/>
      </Typography>
      <Box pt={{ xs: 3, md: 0 }} pl={{ xs: 0, md: 2 }} lineHeight={1}>
        <Typography
          display="block"
          variant="5"
          color="light"
          fontWeight="bold"
          mb={1}
        >
          {heading}
        </Typography>
        <Typography
          display="block"
          variant="body2"
          color= "light"
          mb={2}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
