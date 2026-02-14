import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TheProblem from "@/components/TheProblem";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import ImpactVision from "@/components/ImpactVision";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <Hero />
            <About />
            <TheProblem />
            <HowItWorks />
            <Services />
            <ImpactVision />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    );
}
