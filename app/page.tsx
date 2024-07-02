import Grid from "@/components/Grid";
import { Hero } from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import "./globals.css";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-x-hidden flex-col overflow-y-scroll mx-auto sm:px-10 px-5 snap-proximity snap-y">
      <div className="max-w-7xl w-full ">
        <div className="max-lg:hidden">
          <FloatingNav navItems={navItems} />
        </div>
        {/* <div className="snap-proximity snap-y overflow-scroll"> */}
        <div className="snap-start">
          <Hero />
        </div>
        <div className="snap-start lg:mt-14 mt-20">
          <Grid />
        </div>
        <div className="snap-start">
          <RecentProjects />
          {/* </div> */}
        </div>
        <div>
          <Experience/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </main>
  );
}
