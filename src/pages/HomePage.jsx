import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { About, BannerVideo } from "../components";

export function HomePage() {
  return (
    <Grid sx={{ padding: 0 }}>
      <BannerVideo />
      <About />
    </Grid>
  );
}
