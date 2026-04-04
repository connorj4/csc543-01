import React from 'react';
import { ThemeProvider } from 'next-themes';
/* * ContextProvider component serves as a wrapper for the application, providing theme context to its children components.
 * It uses the ThemeProvider from the next-themes library to manage and apply themes across the application.
 * The ThemeProvider is configured with the following props:
 * - attribute: Specifies the HTML attribute to use for applying the theme (in this case, "class").
 * - defaultTheme: Sets the default theme to "system", which means it will follow the user's system theme preference.
 * - enableSystem: Allows the application to automatically switch themes based on the user's system settings.
 * - disableTransitionOnChange: Disables CSS transitions when changing themes to prevent unwanted animation effects.
 * This component should be used at a high level in the component tree (e.g., in _app.tsx) to ensure that all child components have access to the theme context.
 */
export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}