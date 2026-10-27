import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin", "vietnamese"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "ĐẶNG MINH ĐỨC | PIXEL PORTFOLIO [AMR • ROBOTICS • AI]",
  description:
    "Pixel Red-Black Portfolio of Dang Minh Duc - AMR Robotics Engineer, State Estimation Researcher, UET - VNU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth dark">
      <body
        className={`${pressStart.variable} ${vt323.variable} antialiased bg-[#080305] text-[#f3f4f6] selection:bg-[#ff2a4b] selection:text-black scanlines min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
