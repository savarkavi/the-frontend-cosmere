import type { Metadata } from "next";
import "./globals.css";
import { Courier_Prime } from "next/font/google";

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "TFC",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${courier.className} antialiased`}>{children}</body>
    </html>
  );
}
