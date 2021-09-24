import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

export default function ProfessionalDetails() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h6" gutterBottom>
                Personal Details
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    disabled={true}
                    fullWidth
                    //onChange={(e) => props.onChange(e)}
                    // value={props.data.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    disabled={true}
                    fullWidth
                    autoComplete="family-name"
                    // onChange={(e) => props.onChange(e)}
                    // value={props.data.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="desc"
                    name="address1"
                    label="Description"
                    fullWidth
                    multiline
                    rows={4}
                    disabled={true}
                    autoComplete="shipping address-line1"
                    //onChange={(e) => props.onChange(e)}
                    //value={props.data.desc}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    name="city"
                    label="Email"
                    fullWidth
                    disabled={true}
                    autoComplete="shipping address-level2"
                    // onChange={(e) => props.onChange(e)}
                    // value={props.data.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="contact"
                    name="state"
                    label="Contact No."
                    type="number"
                    fullWidth
                    disabled={true}
                    // onChange={(e) => props.onChange(e)}
                    // value={props.data.contact}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
