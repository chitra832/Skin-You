import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages";
import { Navbar, Footer } from "../components";
import PublicRoute from "./PublicRoute";
import { Box } from "@mui/material";

const SimpleLayout = ({ children }) => {
  return <main>{children}</main>; // Only renders the content without Navbar, Footer, or RegularOffer
};

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main
        style={{
          marginTop: "100px", // Combined height of RegularOffer (68px) and Navbar
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

const Router = () => {
  return (
    <Box sx={{ position: "relative" }}>
      {/* <Navbar /> */}
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          {/* ========================== PUBLIC ROUTES ========================== */}
          <Route path="/" element={<PublicRoute />}>
            <Route
              index
              element={
                // <Layout>
                <HomePage />
                // </Layout>
              }
            />
          </Route>
          {/* ========================== PUBLIC ROUTES ========================== */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  );
};

export default Router;
