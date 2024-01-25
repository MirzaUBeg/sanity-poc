import { SpeedInsights } from "@vercel/speed-insights/next";
import L2Nav from "./_components/L2Nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beacon+ Demo",
  description: "Powered by Sanity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" bg-sfplus-dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="fixed top-0 z-40 w-full">
          <div className="h-14 bg-custom-limegreen">
            <Image
              src="/BeaconLogoOnly.png"
              height={70}
              width={70}
              alt="Sanity Logo"
              className="ml-10"
            />
          </div>
          <L2Nav />
        </header>
        <main>{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
