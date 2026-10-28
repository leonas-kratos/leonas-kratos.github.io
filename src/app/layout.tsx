import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leonas-kratos.github.io"),
  title: "Đặng Minh Đức (Dang Minh Duc) | AMR Robotics & Embedded AI Researcher",
  description:
    "Portfolio of Đặng Minh Đức - Final-year researcher at VNU-UET. Specializing in UWB Indoor Positioning, State Estimation (EKF, UKF, PF), TinyML Edge AI, and Autonomous Mobile Robots (AMR).",
  keywords: [
    "Đặng Minh Đức",
    "Dang Minh Duc",
    "Leonas Kratos",
    "UWB Indoor Positioning",
    "State Estimation",
    "EKF",
    "UKF",
    "Particle Filter",
    "VNU-UET",
    "Viettel High Tech",
    "TinyML",
    "STM32",
    "ROS 2",
  ],
  authors: [{ name: "Đặng Minh Đức", url: "https://github.com/leonas-kratos" }],
  openGraph: {
    title: "Đặng Minh Đức | UWB-IPS & AMR Robotics Researcher",
    description:
      "Research in UWB Indoor Localization, State Estimation Algorithms, and Embedded AI Systems at VNU University of Engineering and Technology (VNU-UET).",
    url: "https://leonas-kratos.github.io",
    siteName: "Dang Minh Duc Portfolio",
    images: [
      {
        url: "/images/DangMinhDuc.png",
        width: 602,
        height: 765,
        alt: "Đặng Minh Đức - VNU-UET",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Đặng Minh Đức | UWB-IPS & AMR Robotics Researcher",
    description:
      "Portfolio of Đặng Minh Đức - UWB Localization, State Estimation (EKF/UKF/PF), TinyML, and AMR Platform at VNU-UET.",
    images: ["/images/DangMinhDuc.png"],
  },
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
