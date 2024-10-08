import React from "react";
import { MainHeading } from "./MainHeading";
import { Box, Button, Grid, Typography } from "@mui/material";
import service1 from "../assets/images/service1.svg";
import service2 from "../assets/images/service2.svg";
import service3 from "../assets/images/service3.svg";
import { South } from "@mui/icons-material";

export function ServiceSections() {
  return (
    <Grid container sx={{ marginBottom: "100px" }}>
      <Typography
        sx={{
          color: "#000",
          fontFamily: "DM Sans",
          fontWeight: 700,
          fontSize: "32px",
          marginBottom: "25px",
        }}
      >
        SERVICES
      </Typography>
      {/* Main Heading */}
      <Grid item xs={12} sx={{ marginBottom: "100px" }}>
        <MainHeading title="Transform your business with advanced technologies" />
      </Grid>

      <Grid item xs={12} lg={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mb: 3,
          }}
        >
          <img src={service1} style={{ borderRadius: "10px" }} />
          <Typography
            sx={{
              color: "#161C2D",
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "24px",
              marginTop: "20px",
            }}
          >
            Software Development
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mb: 3,
          }}
        >
          <img src={service2} style={{ borderRadius: "10px" }} />
          <Typography
            sx={{
              color: "#161C2D",
              marginTop: "20px",
              fontFamily: "DM Sans",
              fontWeight: 700,
              fontSize: "24px",
              //   textAlign: "center",
            }}
          >
            Infrastructure
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={service3} style={{ borderRadius: "10px" }} />
          <Typography
            sx={{
              color: "#161C2D",
              fontFamily: "DM Sans",
              fontWeight: 700,
              marginTop: "20px",
              fontSize: "24px",
            }}
          >
            Virtual & Physical AI Security
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ marginBottom: "68px", textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            padding: "16px 25px",
            background: "linear-gradient(180deg, #FF3131 0%, #991D1D 100%);",
            borderRadius: "60px",
            color: "#fff",
            boxShadow: "none",
            fontFamily: "DM Sans",
            fontWeight: 700,
            fontSize: "18px",
            cursor: "auto",
            textTransform: "uppercase",
            "&:hover": {
              background: "linear-gradient(180deg, #FF3131 0%, #991D1D 100%);",
              color: "#fff",
            },
          }}
        >
          View All Topics <South sx={{ ml: 3 }} />
        </Button>
      </Grid>
    </Grid>
  );
}
