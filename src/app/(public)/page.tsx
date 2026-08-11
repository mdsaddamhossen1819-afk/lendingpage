
import About from "@/components/common/public/shared/About";
import Contact from "@/components/common/public/shared/Contact";
import Experience from "@/components/common/public/shared/Exprience";
import Hero from "@/components/common/public/shared/Hero";
import Projects from "@/components/common/public/shared/Project";



export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
      

    </div>
  );
}
