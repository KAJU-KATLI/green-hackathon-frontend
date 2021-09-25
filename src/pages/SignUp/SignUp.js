import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import FileBase from "react-file-base64";
import api from "../../api/apiClient";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        Farmactors
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    address: "",
    age: null,
    phoneNumber: null,
    who: "",
    image: "",
    username: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const register = await api.post("/register", user);
    console.log(user);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Farmactors
          </Typography>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            style={{}}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={user.firstName}
                  onChange={(e) => {
                    setUser({ ...user, firstName: e.target.value });
                  }}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={user.lastName}
                  onChange={(e) => {
                    setUser({ ...user, lastName: e.target.value });
                  }}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="age"
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  value={user.age}
                  onChange={(e) => {
                    setUser({ ...user, age: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="contact"
                  name="contact"
                  required
                  fullWidth
                  id="contact"
                  label="Contact Number"
                  autoFocus
                  value={user.phoneNumber}
                  onChange={(e) => {
                    setUser({ ...user, phoneNumber: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Home Address"
                  name="address"
                  autoComplete="address"
                  value={user.address}
                  onChange={(e) => {
                    setUser({ ...user, address: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={user.username}
                  onChange={(e) => {
                    setUser({ ...user, username: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={user.password}
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
              <Grid item xs={12}>
                <FormControl>
                <FormLabel>Upload Image</FormLabel>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setUser({ ...user, image: base64 })}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "2%" }}>
              <FormControl>
                <FormLabel>Who are You?</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  required
                  name="radio-buttons-group"
                  value={user.who}
                  onChange={(e) => {
                    setUser({ ...user, who: e.target.value });
                  }}
                >
                  <FormControlLabel
                    value="farmer"
                    control={<Radio />}
                    label="I am a Farmer"
                  />
                  <FormControlLabel
                    value="contractor "
                    control={<Radio />}
                    label="I am a Contractor"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
