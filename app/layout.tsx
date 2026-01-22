import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter, Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // this sets font-display automatically
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Tausur Rahaman | AI, ML, Coding & Physics Portfolio",
  description: "Explore Tausur Rahaman's projects, coding experiments, AI & ML creations, and physics insights. Learn, collaborate, and get inspired.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body
        className={'antialiased min-h-screen bg-main text-white flex flex-col'}
      >
        <CustomCursor />
        <Navbar />
        <main className="pt-16 flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
