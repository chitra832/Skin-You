import React, { useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, Button, Box } from "@mui/material";
import { createAppTheme } from "./theme/theme";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";
import { HomePage } from "./pages/HomePage.jsx";

const App = () => {
  const mode = "light"; // This can be dynamically set, e.g., from a context or state
  const theme = createAppTheme(mode);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ position: "relative" }}>
          <Navbar />
          <HomePage />
          {/* <Footer /> */}
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App