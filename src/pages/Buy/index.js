import React from "react";
import Grid from "@mui/material/Grid";
import Card from "./Card.js";
import { useMediaQuery } from "react-responsive";

const Index = () => {
  const isPC1 = useMediaQuery({
    query: "(max-width: 650px)",
  });
  const isPC2 = useMediaQuery({
    query: "(max-width: 415px)",
  });
  return (
    <div className="main-container">
      <div className="cards" style={{ marginTop: "5%" }}>
        <Grid container spacing={2}>
          <Grid item xs={isPC2 ? 12 : isPC1 ? 6 : 4}>
            <Card />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Index;
