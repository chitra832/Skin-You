import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import {
  BannerVideo,
  IndustrySection,
  PathToBusiness,
  ServiceSections,
  WinningTogether,
} from "../components";

export function HomePage() {
  return (
    <Grid sx={{ padding: 0 }}>
      <BannerVideo />
      {/* <PathToBusiness />
      <IndustrySection />
      <ServiceSections />
      <WinningTogether /> */}
    </Grid>
  );
}
