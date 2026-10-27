import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dang Minh Duc | AMR Robotics & Embedded AI Engineer",
  description:
    "Portfolio of Dang Minh Duc - Autonomous Mobile Robots (AMR), State Estimation, ROS 2, and Embedded AI Researcher at VNU-UET.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-[#0A0A0A] text-[#CCCCCC] selection:bg-[#CC0000] selection:text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
