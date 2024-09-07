import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
// import './styles/customStyles.css';
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadman Wadith | Portfolio",
  description: "Portfolio of K.M. Shadman Wadith, Lecturer at Brac University, a researcher and a developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-100">
      <body className={`${nunito.className} transition-colors duration-100`}>
        <ThemeProvider themes={["light", "dark"]} defaultTheme="system">
          <Navbar />
          <div className="pt-20 md:pt-48"> {/* Adjust the padding top to match the height of your navbar */}
            <main className="flex-grow flex flex-col justify-center items-center">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
