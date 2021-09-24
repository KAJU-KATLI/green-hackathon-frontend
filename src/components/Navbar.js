import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar
        position="static"
        style={{
          backgroundColor: "rgb(156,208,195)",
          borderRadius: 15,
          margin: "30px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 50px",
          width: "93%",
        }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          style={{ color: "black" }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ textAlign: "center" }}
        >
          Farmactors
        </Typography>
        <Link to="/signin">
          <Button color="success" variant="contained">
            Login
          </Button>
        </Link>
      </AppBar>
    </div>
  );
};

export default Navbar;
