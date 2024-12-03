import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import logo from "@/assets/wtsp logo.png";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VOB ICU",
  description: "VOB ICU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>VOB ICU</title>
        <link rel="icon" href={logo.src} type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          richColors={true}
          className="z-[1050px]"
          theme="dark"
          position="top-right"
        />

        {children}
      </body>
    </html>
  );
}
