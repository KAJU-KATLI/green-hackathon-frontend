import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import "./AboutUs.css";

const AboutUs = () => {
  const containerStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    padding: "40px 50px 50px 50px",
  };
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontFamily: '"Montserrat", sans-serif',
        }}
      >
        ABOUT US
      </h1>
      <Container style={containerStyles} className="container">
        <div className="left box">
          <Typography
            variant="h2"
            component="div"
            style={{
              color: "#23272A",
              fontWeight: "bold",
              marginBottom: "40px",
            }}
            className="box_head"
          >
            Our Work
          </Typography>
          <h4 style={{ color: "white", textAlign: "justify" }}>
            Go-To online platform for all the Farmers and Contractors out there.
            We simplify the process of finding a buyer for your produced goods
            as well as finding farmers for any contract
          </h4>
        </div>
        <div className="right box">
          <Typography
            variant="h2"
            component="div"
            style={{
              color: "#23272A",
              fontWeight: "bold",
              marginBottom: "40px",
            }}
            className="box_head"
          >
            Our Culture
          </Typography>
          <h4 style={{ color: "white", textAlign: "justify" }}>
            We are on a mission to make the farming system more transparent and
            provide an easy interface for all your needs by making the farming
            services accessible to all and on-demand for every need.
          </h4>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
