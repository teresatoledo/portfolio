import Image from "next/image";
import Home from "@/components/Home";
import Skills from "@/components/Skills";
import { Separator } from "@/components/ui/separator";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
export default function Main() {
  return (
   <main>
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
   </main>
  );
}
