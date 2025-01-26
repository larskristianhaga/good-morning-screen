import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Good Morning Screen",
  description: "A simple webpage for displaying various useful stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
            <meta content="none" name="robots"/>
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
