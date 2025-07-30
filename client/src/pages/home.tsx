import Hero from "@/components/sections/hero";
import Schedule from "@/components/sections/schedule";
import Venue from "@/components/sections/venue";
import Accommodation from "@/components/sections/accommodation";
import BeachBars from "@/components/sections/beachbars";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-wedding-dark-brown">
      <Hero />
      <Schedule />
      <Venue />
      <Accommodation />
      <BeachBars />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-wedding-dark-brown text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-serif text-xl mb-2">Menia & Florian</p>
          <p className="text-sm opacity-75">15. Juni 2024 • Quellen von Kallithea, Rhodos</p>
        </div>
      </footer>
    </div>
  );
}
