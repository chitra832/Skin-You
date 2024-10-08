import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { About, BannerVideo, InstagramPost } from "../components";
import axios from "axios";

export function HomePage() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
    phone: "",
    message: "",
  });

  // Track scrolling to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Open dialog
  const handleOpen = () => {
    setOpenModal(true);
  };

  // Close dialog and reset form
  const handleClose = () => {
    setOpenModal(false);
    setFormData({
      name: "",
      email: "",
      query: "",
      phone: "",
      message: "",
    });
  };

  // Update form data state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://skin-you-backend.onrender.com/api/appointments",
        formData
      );
      console.log(response.data);
      alert("Appointment booked successfully!");
      handleClose(); // Close modal on successful submission
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Enter the values to book an appointment");
    }
  };

  return (
    <Grid sx={{ padding: 0, position: "relative" }}>
      <BannerVideo />
      <About />
      <InstagramPost />

      {/* Button at the bottom left corner */}
      {isButtonVisible && (
        <Button
          variant="contained"
          sx={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            background: "#FE9B8E",
            textTransform: "capitalize",
            fontFamily: "Marcellus",
            color: "#000",
            fontSize: "18px",
            borderRadius: "10px",
            padding: "10px 20px",
            "&:hover": {
              background: "#FE9B8E",
              color: "#000",
            },
          }}
          onClick={handleOpen} // Open modal on click
        >
          Book Appointment
        </Button>
      )}

      {/* Dialog Component */}
      <Dialog open={openModal} onClose={handleClose}>
        <DialogTitle>Book Your Appointment</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            onSubmit={handleSubmit} // Ensure form submission is handled here
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  name="name"
                  label="Your Name"
                  variant="filled"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  name="email"
                  label="Your Email"
                  variant="filled"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  name="query"
                  label="Your Query"
                  variant="filled"
                  value={formData.query}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  name="phone"
                  label="Your Phone"
                  type="number"
                  variant="filled"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="message"
                  label="Your Message"
                  variant="filled"
                  maxRows={10}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            fullWidth
            sx={{
              background: "#FE9B8E",
              fontFamily: "Marcellus",
              color: "#000",
              fontSize: "18px",
              borderRadius: "10px",
              padding: "10px 20px",
              "&:hover": {
                background: "#FE9B8E",
                color: "#000",
              },
            }}
            onClick={handleSubmit} // Bind form submit to button click
            type="submit"
          >
            Make an Appointment
          </Button>
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit} // Bind form submit to button click
            color="primary"
            type="submit"
          >
            Book Appointment
          </Button> */}
        </DialogActions>
      </Dialog>
    </Grid>
  );
}
