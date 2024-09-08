import type { Metadata } from "next";
import Head from 'next/head'
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shadmanwadith.xyz/"),
  keywords: [
    "Shadman Wadith",
    "Best RL researcher",
    "Best Reinforcement Learning researcher",
    "Best ML researcher",
    "Top 10 teacher in BD",
    "Best teacher in BD",
    "Best developer in Bangladesh",
    "Best developer in BD"
  ],
  title: {
    default: "Shadman Wadith Personal Website",
    template: "%s | Shadman Wadith",
  },
  description:
    "Hello, I am Shadman Wadith. I graduated from the Department of CSE, University of Dhaka. Currently, I am working as a lecturer at the Department of Computer Science and Engineering, Brac University. I specialize in Reinforcement Learning, Vision, and NLP, and I'm a full-stack developer with expertise in FastAPI, NextJS, and NodeJS.",
  openGraph: {
    title: "Shadman Wadith Personal Website",
    description:
      "Hello, I am Shadman Wadith. A researcher and lecturer specializing in Reinforcement Learning, Vision, NLP, and a full-stack developer with expertise in FastAPI, NextJS, and NodeJS.",
    url: "https://www.shadmanwadith.xyz/",
    siteName: "Shadman Wadith Personal Website",
    images: [
      {
        url: "/selfAbout.jpg",
        width: 1200, //1200
        height: 630, //630
        alt: "Shadman Wadith Personal Website Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@wadith027", // Replace with your Twitter handle
    creator: "@wadith027",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'google-site-verification': 'BGZyOrC4tA14fBuM4GyzcLwjBcazKpFqzDo4571pcCs',
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-100">
      <body className={`${nunito.className} transition-colors duration-100`}>
          <Navbar />
          <div className="pt-20 md:pt-48">
            <main className="flex-grow flex flex-col justify-center items-center">
              {children}
            </main>
            <Footer />
            <Analytics />
            <SpeedInsights/>
          </div>
      </body>
    </html>
  );
}
