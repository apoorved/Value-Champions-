import { Introduction } from "@/components/Intro/Introduction";
import { Card } from "@mui/material";
import { Services } from "@/components/Services";
import { Clients } from "@/components/Clients";
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
        <Services/>
      </Card>
      <Clients/>
    </>
  );
}
