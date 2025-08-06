import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ConsentManager from "@/components/ConsentManager";

const FCDefragment = localFont({
  src: [
    {
      path: "../fonts/FCDefragment-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/FCDefragment-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/FCDefragment-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-FCDefragment",
});

export const metadata: Metadata = {
  icons: {
    icon: {
      url: "./logo.svg",
      type: "image/svg+xml",
    },
  },
  title: {
    template: "%s - F[ynary",
    default: "F[ynary Exhibtion 2025",
  },
  description: "F[ynary นิทรรศการแสดงผลงานจุลนิพลธ์ออนไลน์ 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${FCDefragment.variable} antialiased`}>
        {children}
        <ConsentManager />
      </body>
    </html>
  );
}
