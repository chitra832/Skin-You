import React, { useRef } from "react";
import Router from "./routers/Router.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, Button } from "@mui/material";
import { createAppTheme } from "./theme/theme";

const App = () => {
  const mode = "light"; // This can be dynamically set, e.g., from a context or state
  const theme = createAppTheme(mode);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </>
  )
}

export default App