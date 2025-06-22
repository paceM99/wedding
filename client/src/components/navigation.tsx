import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white/90'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="font-serif text-xl font-semibold text-wedding-dark-brown">
            Menia & Florian
          </h1>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-wedding-medium-brown transition-colors"
              >
                Startseite
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('schedule')}
                className="hover:text-wedding-medium-brown transition-colors"
              >
                Zeitplan
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('venue')}
                className="hover:text-wedding-medium-brown transition-colors"
              >
                Veranstaltungsort
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('accommodation')}
                className="hover:text-wedding-medium-brown transition-colors"
              >
                Übernachtung
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-wedding-medium-brown transition-colors"
              >
                Kontakt
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-wedding-dark-brown" />
            ) : (
              <Menu className="h-6 w-6 text-wedding-dark-brown" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-wedding-light-brown">
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left hover:text-wedding-medium-brown transition-colors"
                >
                  Startseite
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('schedule')}
                  className="block w-full text-left hover:text-wedding-medium-brown transition-colors"
                >
                  Zeitplan
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('venue')}
                  className="block w-full text-left hover:text-wedding-medium-brown transition-colors"
                >
                  Veranstaltungsort
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('accommodation')}
                  className="block w-full text-left hover:text-wedding-medium-brown transition-colors"
                >
                  Übernachtung
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left hover:text-wedding-medium-brown transition-colors"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
