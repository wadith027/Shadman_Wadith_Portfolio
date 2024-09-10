import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import GoogleAnalytics from '../GoogleAnalytics';

const nunito = Nunito({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-100">
      <GoogleAnalytics />
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
