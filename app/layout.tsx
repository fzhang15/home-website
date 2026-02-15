import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Feng Zhang, Ph.D. — Applied Scientist & Researcher",
  description:
    "Personal homepage of Feng Zhang, Ph.D. — Decoding sensor data with deep learning for seamless human-machine interactions.",
  keywords: [
    "Feng Zhang",
    "deep learning",
    "RF sensing",
    "signal processing",
    "IoT",
    "radar",
    "WiFi CSI",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
