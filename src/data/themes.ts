import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Theme {
      extra: {
        resourceBackgroundColor: string;
        resourceBorderColor: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      extra: {
        resourceBackgroundColor: string;
        resourceBorderColor: string;
      };
    }
  }

export const themes = {
    light: createTheme({
        palette: {
            mode: 'light',
        },
        extra: {
            resourceBackgroundColor: "rgba(0,0,0,0.02)",
            resourceBorderColor: "rgba(0,0,0,0.25)",
        }
    }),
    dark: createTheme({
        palette: {
            mode: 'dark',
        },
        extra: {
            resourceBackgroundColor: "rgba(255,255,255,0.02)",
            resourceBorderColor: "rgba(255,255,255,0.25)",
        }
    }),
}