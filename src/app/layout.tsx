import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://leonas-kratos.github.io"),
  title: "Đặng Minh Đức — UWB Indoor Positioning Researcher",
  description:
    "Final-year student at VNU-UET researching GPS-denied indoor localization using Ultra-Wideband technology and nonlinear state estimation algorithms applied to Autonomous Mobile Robots.",
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
    "STM32",
    "ROS 2",
  ],
  authors: [{ name: "Đặng Minh Đức", url: "https://github.com/leonas-kratos" }],
  openGraph: {
    title: "Đặng Minh Đức — UWB Indoor Positioning Researcher",
    description:
      "Research in UWB Indoor Localization, State Estimation Algorithms, and Embedded AI Systems at VNU University of Engineering and Technology (VNU-UET).",
    url: "https://leonas-kratos.github.io",
    siteName: "Đặng Minh Đức Portfolio",
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
    title: "Đặng Minh Đức — UWB Indoor Positioning Researcher",
    description:
      "Final-year student at VNU-UET researching GPS-denied indoor localization using Ultra-Wideband technology and nonlinear state estimation algorithms.",
    images: ["/images/DangMinhDuc.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
