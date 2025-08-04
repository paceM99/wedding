import { ExternalLink, MapPin, Star } from "lucide-react";
import tambakioImage from "@assets/WhatsApp Image 2025-08-04 at 16.22.58_1754317406538.jpeg";

interface BeachBar {
  name: string;
  location: string;
  description: string;
  image: string;
  website: string;
  rating: number;
  specialty: string;
}

export default function BeachBars() {
  const beachBars: BeachBar[] = [
    {
      name: "Naya Beach Bar",
      location: "Rhodos",
      description: "Luxuriöse Strandbar mit spektakulärem Meerblick und erstklassigen Cocktails in eleganter Atmosphäre.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      website: "https://www.nayarhodes.com/",
      rating: 4.8,
      specialty: "Signature Cocktails & Meeresfrüchte"
    },
    {
      name: "Kalami Beach Bar",
      location: "Kalami Strand",
      description: "Authentische griechische Strandbar mit traditionellen Speisen und entspannter Atmosphäre direkt am Wasser.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      website: "https://www.kalamibeachbar.gr/",
      rating: 4.6,
      specialty: "Griechische Küche & Ouzo"
    },
    {
      name: "Santa Marina Beach Bar",
      location: "Santa Marina, Rhodos",
      description: "Stilvolle Strandbar mit modernem Design, perfekt für Sonnenuntergänge und erfrischende Getränke.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      website: "https://santamarinarhodes.gr/",
      rating: 4.7,
      specialty: "Sunset Cocktails & Lounge"
    },
    {
      name: "Oasis Beach Kallithea",
      location: "Kallithea",
      description: "Tropische Oase mit Palmen und kristallklarem Wasser, ideal für einen entspannten Tag am Strand.",
      image: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      website: "https://oasisbeachkallithea.com/",
      rating: 4.5,
      specialty: "Tropische Drinks & Entspannung"
    },
    {
      name: "Kallithea Springs",
      location: "Kallithea Thermalquellen",
      description: "Historische Thermalquellen mit Beach Bar, kombiniert Wellness mit mediterranem Genuss.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      website: "https://kallitheasprings.com/",
      rating: 4.9,
      specialty: "Wellness & Thermalquellen"
    },
    {
      name: "Tambakio Beach Bar",
      location: "Rhodos",
      description: "Elegante Strandbar mit traditioneller griechischer Architektur, wunderschönen Bögen und mediterraner Atmosphäre mit Blick aufs Meer.",
      image: tambakioImage,
      website: "https://www.tambakio.com/",
      rating: 4.4,
      specialty: "Mediterrane Architektur & Meerblick"
    },
    {
      name: "Mojito Beach Bar",
      location: "Rhodos",
      description: "Spezialisiert auf Mojitos und kubanische Vibes, mit Sand zwischen den Zehen und Salsa-Rhythmen.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      website: "https://mojito-beachbar.gr/",
      rating: 4.6,
      specialty: "Mojitos & Kubanische Atmosphäre"
    },
    {
      name: "Tulum Beach Bar",
      location: "Rhodos",
      description: "Mexikanisch inspirierte Beach Bar mit Tulum-Atmosphäre, Tacos und exotischen Cocktails.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      website: "https://tulumbeachbar.gr/",
      rating: 4.7,
      specialty: "Mexikanische Küche & Tequila"
    },
    {
      name: "Galazio Beach",
      location: "Rhodos",
      description: "Blaues Paradies am Meer mit entspannter Atmosphäre und herrlichem Blick auf das Ägäische Meer.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      website: "https://www.galaziobeach.com/",
      rating: 4.8,
      specialty: "Meerblick & Frische Säfte"
    },
    {
      name: "Azul Rhodes",
      location: "Rhodos",
      description: "Elegante blaue Strandbar mit minimalistischem Design und erstklassigen mediterranen Gerichten.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      website: "https://azulrhodes.com/",
      rating: 4.9,
      specialty: "Mediterrane Küche & Design"
    },
    {
      name: "Nor Project",
      location: "Rhodos",
      description: "Innovative Strandbar mit modernem Konzept, nachhaltigen Praktiken und kreativen Cocktails.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      website: "https://norproject.gr/",
      rating: 4.6,
      specialty: "Nachhaltigkeit & Innovation"
    }
  ];

  return (
    <section id="beachbars" className="py-20 bg-gradient-to-b from-wedding-cream to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-wedding-dark-brown mb-6">
            Beach Bars & Entspannung
          </h2>
          <div className="w-24 h-0.5 bg-wedding-medium-brown mx-auto mb-6"></div>
          <p className="text-lg text-wedding-medium-brown max-w-3xl mx-auto">
            Entdeckt die schönsten Strandbars von Rhodos für unvergessliche Momente am Meer. 
            Von entspannten Sundowners bis hin zu lebendigen Partyabenden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beachBars.map((bar, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={bar.image} 
                  alt={bar.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-medium text-wedding-dark-brown">{bar.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-wedding-dark-brown mb-2">
                  {bar.name}
                </h3>
                
                <div className="flex items-center text-wedding-medium-brown mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{bar.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {bar.description}
                </p>

                <div className="mb-4">
                  <span className="inline-block bg-wedding-light-brown/20 text-wedding-dark-brown text-xs px-3 py-1 rounded-full">
                    {bar.specialty}
                  </span>
                </div>

                <a 
                  href={bar.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-wedding-medium-brown hover:bg-wedding-dark-brown text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <span className="mr-2">Website besuchen</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-wedding-medium-brown">
            <strong>Tipp:</strong> Reservierungen werden empfohlen, besonders während der Hochsaison. 
            Viele Bars bieten auch Wassersport und Liegestuhl-Verleih an.
          </p>
        </div>
      </div>
    </section>
  );
}