import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Home from "@/components/Home";
import { ThemeProvider } from "@/components/theme-provider";
import Skills from "@/components/Skills";
import { Separator } from "@/components/ui/separator";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Teresa's portfolio",
  icons: {
    icon: '/logoAzul.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Header/>
        <Home/>
        <Separator/>
        <Skills/>
        <Separator/>
        <Projects/>
        <Separator/>
        <Education/>
        <Separator/>
        <Experience/>
        <Separator/>
        <Contact/>
        <Separator/>
        <Footer/>
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
