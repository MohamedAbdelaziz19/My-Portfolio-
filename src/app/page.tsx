import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";
import Service from "./components/Service";

// app/page.tsx
export default function HomePage() {
  return (
    <section>
     <Header/>
    <HeroSection/>
    <About/>
    <Service/>
    <Project/>
    <Contact/>
    <Footer/>
    </section>
  )
}
