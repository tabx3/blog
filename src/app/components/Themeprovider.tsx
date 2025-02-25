"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useState, useEffect } from "react";

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
