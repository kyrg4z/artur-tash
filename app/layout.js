import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Artur Tash",
  description: "Artur Tashbolotov is a passionate CS and cybersecurity enthusiast, startup engineer, photographer and just a chill guy who is interested in STEM and entrepreneurship related fields.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Analytics/>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
