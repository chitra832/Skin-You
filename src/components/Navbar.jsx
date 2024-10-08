import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Collapse,
} from "@mui/material";
import logo from "../assets/images/logo.png";
import { Menu, Close, ExpandMore } from "@mui/icons-material";

const pages = [
  { label: "Home", route: "/" },
  { label: "Treatments", route: "/what-we-do", hasDropdown: false },
  { label: "Treatment by concern", route: "/careers", hasDropdown: false },
  { label: "Media", route: "/who-we-are", hasDropdown: false },
  { label: "About us", route: "/news", hasDropdown: false },
  { label: "Contact", route: "/news", hasDropdown: false },
];

export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState(
    pages.reduce((acc, page) => ({ ...acc, [page.route]: false }), {})
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggleDropdown = (route) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [route]: !prevState[route],
    }));
  };

  const list = () => (
    <Box
      sx={{ width: 250, position: "relative" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton
        sx={{ position: "absolute", top: 0, right: 0 }}
        size="large"
        aria-label="open drawer"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer(false)}
        color="#FF3131"
      >
        <Close sx={{ color: "#FF3131" }} />
      </IconButton>
      <Box sx={{ padding: "16px" }}>
        <img src={logo} height="60px" />
      </Box>
      <List>
        {pages.map((page) => (
          <React.Fragment key={page.route}>
            <ListItem>
              <ListItemText
                primary={page.label}
                primaryTypographyProps={{
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  fontWeight: 700,
                  textDecoration: "none",
                  // color: isActiveRoute(page.route)
                  //   ? "#FF3131" // Active color
                  //   : "rgba(38, 38, 38, 0.6)", // Inactive color
                }}
              />
              {page.hasDropdown && (
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation
                    toggleDropdown(page.route);
                  }}
                >
                  <ExpandMore
                    sx={{
                      transform: dropdownStates[page.route]
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.3s",
                      color: "rgba(38, 38, 38, 0.6)",
                    }}
                  />
                </IconButton>
              )}
            </ListItem>
            {page.hasDropdown && (
              <Collapse
                in={dropdownStates[page.route]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="Sub-item 1" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="Sub-item 2" />
                  </ListItem>
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    // <Box sx={{ padding: "0 100px" }}>
    <Grid
      container
      sx={{
        position: "absolute",
        top: "50px",
        padding: { xs: "0 20px 0", md: "20px 120px 20px" },
        zIndex: 1000,
        // height: "70px",
        // background: "#fff",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ background: "#fff", padding: "10px", borderRadius: "20px" }}
      >
        {/* -------------------------- LARGE SCREEN MENU-------------------------- */}
        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Box>
            <img src={logo} height="60px" />
          </Box>
          <Box sx={{ display: "flex", gap: "26px" }}>
            {pages.map((page) => (
              <Typography
                key={page.route}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigation
                  toggleDropdown(page.route);
                }}
                sx={{
                  color:
                    page.route == "Home"
                      ? "#FE9B8E" // Active color
                      : "#000", // Inactive color
                  fontSize: "16px",
                  fontFamily: "Marcellus",
                  fontWeight: 500,
                  textDecoration: "none",
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
                component="a"
              >
                {page.label}
                {page.hasDropdown && (
                  <IconButton size="small">
                    <ExpandMore
                      sx={{
                        transform: dropdownStates[page.route]
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s",
                        color: "rgba(38, 38, 38, 0.6)",
                      }}
                    />
                  </IconButton>
                )}
              </Typography>
            ))}
          </Box>
        </Box>
        {/* -------------------------- LARGE SCREEN MENU-------------------------- */}

        {/* -------------------------- MOBILE MENU-------------------------- */}
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            justifyContent: "space-between",
            flexGrow: 1,
            width: "100%",
            padding: "14px 0",
          }}
        >
          <Box>
            <img src={logo} height="60px" />
          </Box>
          <Box>
            <IconButton
              size="large"
              aria-label="open drawer"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="#FF3131"
            >
              <Menu sx={{ color: "#FF3131" }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
          </Box>
        </Box>
        {/* -------------------------- MOBILE MENU-------------------------- */}
      </Grid>
    </Grid>
    // </Box>
  );
}
