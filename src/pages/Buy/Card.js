import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Input from '@mui/material/Input';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 360 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Wheat
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Quantity : 95Kg
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Price : Rs 5/Kg
        </Typography>
      </CardContent>
      <CardActions>
        <Input placeholder="Quantity Needed"/>
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        <Button variant = "contained">Buy</Button>
      </CardActions>
    </Card>
  );
}
