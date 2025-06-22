import { MapPin } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero pt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Beautiful couple portrait */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
            alt="Elegant wedding couple portrait" 
            className="w-64 h-64 object-cover rounded-full mx-auto shadow-2xl border-4 border-white"
          />
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-light text-wedding-dark-brown mb-4">
          Florian <span className="text-wedding-medium-brown">&</span> Menia
        </h1>
        <p className="text-xl md:text-2xl text-wedding-medium-brown mb-6 font-light">
          Für immer zusammen
        </p>
        <div className="text-lg md:text-xl text-wedding-dark-brown mb-8">
          <p className="mb-2">Samstag, 15. Juni 2024</p>
          <p className="flex items-center justify-center">
            <MapPin className="mr-2 text-wedding-medium-brown h-5 w-5" />
            Rosewood Manor, Cotswolds
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('schedule')}
            className="bg-wedding-medium-brown text-white px-8 py-3 rounded-full font-medium hover:bg-wedding-dark-brown transition-colors"
          >
            Zeitplan ansehen
          </button>
          <button 
            onClick={() => scrollToSection('venue')}
            className="border-2 border-wedding-medium-brown text-wedding-medium-brown px-8 py-3 rounded-full font-medium hover:bg-wedding-medium-brown hover:text-white transition-colors"
          >
            Veranstaltungsort Details
          </button>
        </div>
      </div>
    </section>
  );
}
