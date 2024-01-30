import "./globals.css";

import Footer from "@/components/nav/Footer";
import { Inter } from "next/font/google";
import LandingPageNavbar from "@/components/nav/LandingPageNavbar";
import type { Metadata } from "next";
import NextThemeProvider from "@/providers/NextThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duaa Taman",
  description: "The official site for duaa taman.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider>
          <LandingPageNavbar />
          {children}
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;