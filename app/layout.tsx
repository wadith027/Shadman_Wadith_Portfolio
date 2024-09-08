import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
// import './styles/customStyles.css';
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shadmanwadith.xyz/"),
  keywords: ["Shadman Wadith","Best RL researcher","Best Reinforcement Learning researcher","Best ML researcher","Top 10 teacher in BD","Best teacher in BD","Best devoloper in Bangladesh","Best devoloper in BD"],
  title: {
    default: "Shadman Wadith Personal Website",
    template: `%s | Shadman Wadith`
  },
  openGraph: {
    description: 'Hello, I am Shadman Wadith. I graduated from the Department of CSE, University of Dhaka. Currently, I am working as a lecturer at the Department of Computer Science and Engineering, Brac University. Also, I am in the final semester of my Master, which I am pursuing at the Department of CSE, University of Dhaka. I specialize in Reinforcement Learning, Vision and Natural Language Processing. Alongside my academic role, I am also a full-stack developer with expertise in FastAPI, NextJS, and NodeJS. I am passionate about problem-solving, exploring new technologies, and gaming. A fast learner by nature, I thrive on continuously expanding my knowledge and taking on new challenges.'
  }
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
          <div className="pt-20 md:pt-48"> {/* Adjust the padding top to match the height of your navbar */}
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
