import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

import ThemeProvider from "./components/Themeprovider";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tabx3",
  description: "Tabx3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} max-w-xl mx-auto px-6 antialiased text-gray-900 bg-white dark:text-yellow-50 dark:bg-[#242424]`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
