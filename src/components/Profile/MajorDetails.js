import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

import image from "../../assets/heroFarmer.png";

export default function MajorDetails() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ bgcolor: "#cfe8fc", height: "25vh", width: "100%" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "20%" }}
            image={image}
            alt="Farmer Jod"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h2">
                Vaibhav Gupta
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                component="div"
                style={{ textAlign: "right" }}
              >
                Contractor
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
