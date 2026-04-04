"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ContextProvider from "./context-provider";
import Header from "./header";
import Footer from "./footer";
import PageWrapper from "./wrapper";
/* * Providers component serves as a wrapper for the application, providing necessary context and layout structure to its children components.
 * It initializes a QueryClient from the @tanstack/react-query library to manage server state and caching for the application.
 * The component uses the QueryClientProvider to make the QueryClient available to all child components that need to perform data fetching and caching.
 * It also wraps its children with a ContextProvider, which provides theme context using the next-themes library.
 * The layout structure includes a Header at the top, a main content area where the children components are rendered, and a Footer at the bottom.
 * This component should be used at a high level in the component tree (e.g., in _app.tsx) to ensure that all child components have access to the necessary context and layout structure.
 */ 
interface Props {
  children?: React.ReactNode; // Optional prop to accept child components that will be rendered within the Providers component
  //session?: any;
}

const Providers: React.FC<Props> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <PageWrapper>
          <Header />
          <div className="flex">
            <div className="w-full overflow-x-auto ">{children}</div>
          </div>
          <Footer />
        </PageWrapper>
      </ContextProvider>
    </QueryClientProvider>
  );
};
export default Providers;
