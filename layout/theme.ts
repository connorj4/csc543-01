'use client';
import { createTheme } from '@mui/material/styles';
/*
  * This file defines a custom Material-UI theme for the application.
  * The theme is created using the createTheme function from Material-UI, which allows for customization of various aspects of the UI.
  * In this case, the theme is configured to use a specific font family (var(--font-roboto)) for all typography elements in the application.
  * This ensures a consistent look and feel across all text components that utilize Material-UI's typography system.
  * The theme can be further customized by adding additional properties such as colors, spacing, and component overrides as needed.
  * The created theme is exported as the default export of the module, allowing it to be easily imported and used throughout the application wherever Material-UI components are utilized.
 */
const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});

export default theme;