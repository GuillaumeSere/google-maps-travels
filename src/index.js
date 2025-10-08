import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeProvider as StylesThemeProvider } from '@mui/styles';
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
    palette: {
        mode: "light", // ou "dark"
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#9c27b0",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <StylesThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </StylesThemeProvider>
        </ThemeProvider>
    </React.StrictMode>
);
