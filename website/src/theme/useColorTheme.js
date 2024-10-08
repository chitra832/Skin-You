import {createTheme,useMediaQuery} from "@mui/material";
import React from "react";
import theme, {getDesignTokens} from "./theme";

export const useColorTheme = () => {
    const isDarkModeEnabled = useMediaQuery('(prefers-color-scheme: dark)')
    const [mode, setMode] = React.useState(isDarkModeEnabled ? "dark" : "light");

    const toggleColorMode = () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

    const modifiedTheme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );

    return {
        theme: modifiedTheme,
        mode,
        toggleColorMode,
    };
};