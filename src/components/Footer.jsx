import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/images/logoWhite.svg";
import fb from "../assets/images/fb.svg";
import google from "../assets/images/google.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";
import location from "../assets/images/location.svg";
import phone from "../assets/images/phone.svg";
import email from "../assets/images/email.svg";

export function Footer() {
  return (
    <>
      <Grid
        container
        sx={{
          background: "#000",
          color: "#FAFAFA",
          padding: { xs: "0 20px 0", md: "20px 120px 20px" },
        }}
      >
        <Grid item xs={12} lg={4}>
          <img src={logo} height="50px" />
          <Typography
            sx={{
              // color: , // Inactive color
              fontSize: "16px",
              fontWeight: 400,
              fontFamily: "Inter",
            }}
          >
            Lorem Ipsum is simply dummy text of the and typesetting industry.
            Lorem Ipsum is dummy text of the printing.
          </Typography>
          <Box
            sx={{
              display: "flex",
              height: "100px",
              justifyContent: "start",
              alignItems: "center",
              gap: "14px",
              paddingRight: { xs: 0, lg: "150px" },
            }}
          >
            <img src={fb} />
            <img src={google} />
            <img src={linkedin} />
            <img src={twitter} />
          </Box>
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              justifyContent: "start",
              alignItems: "flex-start",
              gap: "27px",
              // paddingRight: { xs: 0, lg: "150px" },
            }}
          >
            <Typography
              sx={{
                // color: , // Inactive color
                fontSize: "24px",
                fontWeight: 600,
                fontFamily: "Roboto",
              }}
            >
              Contract
            </Typography>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "8px",
                  mb: 3,
                  mt: { xs: 3, md: 0 },
                }}
              >
                <img src={location} />
                <Typography
                  sx={{
                    // color: , // Inactive color
                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "Roboto",
                  }}
                >
                  Toronto, Canada
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  mb: 3,
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <img src={phone} />
                <Typography
                  sx={{
                    // color: , // Inactive color
                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "Roboto",
                  }}
                >
                  1 (905) 636-8177
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  mb: 3,
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <img src={email} />
                <Typography
                  sx={{
                    // color: , // Inactive color
                    fontSize: "16px",
                    fontWeight: 400,
                    fontFamily: "Roboto",
                  }}
                >
                  support@pqxel.freshdesk.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Grid container sx={{ paddingLeft: { xs: 0, lg: "100px" } }}>
            <Grid item xs={12} md={3}>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: "Roboto",
                  fontWeight: 600,
                  marginBottom: "25px",
                }}
              >
                Quick Links
              </Typography>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Home
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Blog
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Training
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  News
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Careers
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: "Roboto",
                  fontWeight: 600,
                  marginBottom: "25px",
                }}
              >
                Services
              </Typography>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Software Development
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Infrastructure
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Sales Agency
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Staffing
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Security
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Cybersecurity
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Digital Marketing
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: "Roboto",
                  fontWeight: 600,
                  marginBottom: "25px",
                }}
              >
                Industries
              </Typography>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Ride Share
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Accounting
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Health Care
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Retail
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: "Roboto",
                  fontWeight: 600,
                  marginBottom: "25px",
                }}
              >
                Who are we
              </Typography>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  About us
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Community Support
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  Leadership
                </li>
                <li
                  style={{
                    marginBottom: "25px",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                  // onClick={() => handleNavigation("/ios-app")}
                >
                  FAQs
                </li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
