"use client";
import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
/**
 * A Primary Wrapper for Pages within the App.
 *
 * @param {string} props.children - The text to display inside the button.
 */

interface RootLayoutProps {
  children: React.ReactNode;
}
const PageWrapper: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col content-start gap-4 items-center justify-between">
        <div className="w-full justify-start ">{children}</div>
      </div>
    </ThemeProvider>
  );
};
export default PageWrapper;
