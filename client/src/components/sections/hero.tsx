import { MapPin } from "lucide-react";
const backgroundImage = "/attached_assets/IMG_9166.jpg";

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
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(245, 245, 220, 0.75), rgba(245, 245, 220, 0.75)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">

        
        <h1 className="font-serif text-5xl md:text-7xl font-light text-wedding-dark-brown mb-4">
          Menia <span className="text-wedding-medium-brown">&</span> Florian
        </h1>
        <p className="text-xl md:text-2xl text-wedding-medium-brown mb-6 font-light">
          Für immer zusammen
        </p>
        <div className="text-lg md:text-xl text-wedding-dark-brown mb-8">
          <p className="mb-2">Freitag, 21.08.2026</p>
          <p className="flex items-center justify-center">
            <MapPin className="mr-2 text-wedding-medium-brown h-5 w-5" />
            Quellen von Kallithea, Rhodos
          </p>
        </div>
        

      </div>
    </section>
  );
}
