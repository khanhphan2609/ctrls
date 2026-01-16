import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const UTM_AVO = localFont({
  src: "../public/fonts/utm-avo-webfont/utm-avo.woff",
  variable: "--font-UTM_AVO",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CtrlS - Lưu giữ giá trị của bạn",
  description: "Creative – Media – Entertainment",
  icons: {
    icon: "/icon.png",
  },
};

import Header from "@/components/Header";
import FloatingSocials from "@/components/FloatingSocials";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${UTM_AVO.variable} ${geistMono.variable} antialiased bg-black`}
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <FloatingSocials />
      </body>
    </html>
  );
}
