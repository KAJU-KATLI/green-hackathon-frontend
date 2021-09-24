import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/dashboard/profile">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText
          style={{ color: "black", textDecoration: "none" }}
          primary="Profile"
        />
      </ListItem>
    </Link>
    <Link to="/dashboard/sell">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText
          style={{ color: "black", textDecoration: "none" }}
          primary="Sell Crop"
        />
      </ListItem>
    </Link>
    <Link to="/dashboard/history">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText
          style={{ color: "black", textDecoration: "none" }}
          primary="Transaction History"
        />
      </ListItem>
    </Link>
    <Link to="/dashboard/buy">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText
          style={{ color: "black", textDecoration: "none" }}
          primary="Buy Land"
        />
      </ListItem>
    </Link>
    <Link to="/dashboard/chat">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText
          style={{ color: "black", textDecoration: "none" }}
          primary="Conversation"
        />
      </ListItem>
    </Link>
  </div>
);
