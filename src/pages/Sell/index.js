import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "./Card.js";
import { useMediaQuery } from "react-responsive";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FileBase from "react-file-base64";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Index = () => {
  const farmer = false;
  const isPC1 = useMediaQuery({
    query: "(max-width: 650px)",
  });
  const isPC2 = useMediaQuery({
    query: "(max-width: 415px)",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="main-container">
      <div
        className="addItem"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={handleOpen} variant="contained" color="success">
          {farmer ? "ADD CROP" : "RENT LAND"}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box component="form" sx={style} noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name of Crop"
                  name="name"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="type"
                  label="Type of Crop"
                  name="type"
                  autoComplete="type"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="amountInKG"
                  label="Amount (in Kg)"
                  type="amountInKG"
                  id="amountInKG"
                  autoComplete="amountInKG"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="pricePerKG"
                  label="Price (One Kg)"
                  type="pricePerKG"
                  id="pricePerKG"
                  autoComplete="pricePerKG"
                />
              </Grid>
              <Grid item xs={12}>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => console.log(base64)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
        </Modal>
      </div>
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
