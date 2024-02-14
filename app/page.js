import { Introduction } from "@/components/Intro/Introduction";
import { Box, Card } from "@mui/material";
import { Services } from "@/components/Services";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";
import { Mission } from "@/components/Mission";
import { YTVideos } from "@/components/YTVideos";

export default function Home() {
  return (
    <>
      <Introduction />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <Services />
      </Card>
      <Clients />
      <Mission />
      <Card
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
        }}
      >
        <YTVideos />
      </Card>
      <Box
        pt={2}
        px={1}
        mt={4}
        sx={{
          backgroundImage: `url('/waves-white.svg')`,
          backgroundSize: "cover",
        }}
      >
        <Footer />
      </Box>
    </>
  );
}
