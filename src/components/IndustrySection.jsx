import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { MainHeading } from "./MainHeading";
import { ArrowForward } from "@mui/icons-material";
import car from "../assets/images/car.svg";
import account from "../assets/images/account.svg";
import health from "../assets/images/health.svg";

export function IndustrySection() {
  return (
    <Grid container sx={{ marginBottom: "100px" }}>
      {/* Main Heading */}
      <Grid item xs={12} lg={9} sx={{ marginBottom: "100px" }}>
        <MainHeading title="Select your industry" />
      </Grid>

      <Grid
        item
        xs={12}
        md={5.5}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "20px",
          marginBottom: "45px",
          borderBottom: "1px solid #000",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <img src={car} alt="car icon" />
          <Typography sx={{ fontSize: "24px", fontFamily: "DM Sans" }}>
            Ride Share
          </Typography>
        </Box>
        <ArrowForward sx={{ color: "rgba(124, 136, 147, 1)" }} />
      </Grid>
      <Grid item md={1}></Grid>
      {/* Second Grid Item */}
      <Grid
        item
        xs={12}
        md={5.5}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
          alignItems: "center",
          borderBottom: "1px solid #000",
          marginBottom: "45px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <img src={car} alt="car icon" />
          <Typography sx={{ fontSize: "24px", fontFamily: "DM Sans" }}>
            Ride Share
          </Typography>
        </Box>
        <ArrowForward sx={{ color: "rgba(124, 136, 147, 1)" }} />
      </Grid>

      <Grid
        item
        xs={12}
        md={5.5}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "20px",
          marginBottom: "45px",
          borderBottom: "1px solid #000",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "flex-end",
            gap: "6px",
          }}
        >
          <img src={account} alt="car icon" />
          <Typography sx={{ fontSize: "24px", fontFamily: "DM Sans" }}>
            Accounting
          </Typography>
        </Box>
        <ArrowForward sx={{ color: "rgba(124, 136, 147, 1)" }} />
      </Grid>
      <Grid item md={1}></Grid>
      {/* Second Grid Item */}
      <Grid
        item
        xs={12}
        md={5.5}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
          alignItems: "center",
          borderBottom: "1px solid #000",
          marginBottom: "45px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "flex-end",
            gap: "6px",
          }}
        >
          <img src={account} alt="car icon" />
          <Typography sx={{ fontSize: "24px", fontFamily: "DM Sans" }}>
            Accounting
          </Typography>
        </Box>
        <ArrowForward sx={{ color: "rgba(124, 136, 147, 1)" }} />
      </Grid>

      <Grid
        item
        xs={12}
        md={5.5}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingBottom: "20px",
          borderBottom: "1px solid #000",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <img src={health} alt="car icon" />
          <Typography sx={{ fontSize: "24px", fontFamily: "DM Sans" }}>
            Health Care
          </Typography>
        </Box>
        <ArrowForward sx={{ color: "rgba(124, 136, 147, 1)" }} />
      </Grid>
      <Grid item md={1}></Grid>
      {/* Second Grid Item */}
      <Grid
        item
        xs={12}
        md={5.5}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #000",
          paddingBottom: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "flex-end",
            gap: "6px",
          }}
        >
          <img src={health} alt="car icon" />
          <Typography sx={{ fontSize: "24px", fontFamily: "DM Sans" }}>
            Health Care
          </Typography>
        </Box>
        <ArrowForward sx={{ color: "rgba(124, 136, 147, 1)" }} />
      </Grid>
    </Grid>
  );
}
