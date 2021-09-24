import React from "react";
import Container from "@mui/material/Container";
import heroimg from "../../../assets/heroFarmer.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "./Hero.css";

const Hero = () => {
  const containerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
  };
  return (
    <div className="hero">
      <Container style={containerStyles}>
        <div className="text">
          <Typography
            variant="h2"
            component="div"
            style={{
              color: "#23272A",
              fontWeight: "bold",
              marginBottom: "40px",
            }}
            className = "Heading"
          >
            Connecting
            <br />
            Farmers And
            <br />
            Technology
          </Typography>
          <small style={{ color: "grey" }}>
            Be a participant in making the India Digital <br />
            and handle transactions easily.
          </small>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
            className="btns"
          >
            <Button variant="contained">I am a Contractor</Button>
            <Button variant="outlined">I am a Farmer</Button>
          </div>
        </div>
        <div className="Image">
          <img src={heroimg} alt="Hero" />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
