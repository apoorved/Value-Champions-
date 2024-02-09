import { Container, Grid } from "@mui/material";
import React from "react";
import { InfoCard } from "./card/InfoCard";
import { serviceConfig } from "./configs/serviceConfig";
export const Services = () => {
  return (
    <Container>
      <Grid container spacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}>
        {serviceConfig.map((service) => (
          <Grid item xs={12} sm={6} md={6} lg={4} key={service.heading}>
            <InfoCard
                heading = {service.heading}
                description = {service.description}
                Icon={service.Icon}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
