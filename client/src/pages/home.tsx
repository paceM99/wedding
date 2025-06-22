import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import Schedule from "@/components/sections/schedule";
import Venue from "@/components/sections/venue";
import Accommodation from "@/components/sections/accommodation";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-wedding-dark-brown">
      <Navigation />
      <Hero />
      <Schedule />
      <Venue />
      <Accommodation />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-wedding-dark-brown text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-serif text-xl mb-2">Florian & Menia</p>
          <p className="text-sm opacity-75">15. Juni 2024 • Rosewood Manor, Cotswolds</p>
        </div>
      </footer>
    </div>
  );
}
