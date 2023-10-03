import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reason from "@/components/Reason";
import Contact from "@/components/contact/Contact";

export default function Home() {
  
  return (
    <div className=" md:p-10 p-5  w-screen">
      <div
        className="w-full"
        id="
      navbar"
      >
        <Navbar />
      </div>

      <div className="w-full" id="hero">
        <Hero />
      </div>
      <div className="w-full" id="contact">
        <Contact />
      </div>
      <div className="w-full" id="about">
        <Reason />
      </div>
    </div>
  );
}
