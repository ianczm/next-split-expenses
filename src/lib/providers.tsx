"use client";

import { ThemeProvider } from "@/shadcn/theme-provider";
import { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
