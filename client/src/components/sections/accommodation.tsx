import { MapPin, Star } from "lucide-react";

interface Accommodation {
  name: string;
  location: string;
  description: string;
  priceRange: string;
  rating: number;
  image: string;
  specialOffer: string;
}

export default function Accommodation() {
  const accommodations: Accommodation[] = [
    {
      name: "The Rose & Crown Inn",
      location: "Chipping Campden (2 Minuten vom Veranstaltungsort)",
      description: "Historisches Gasthaus mit individuell gestalteten Zimmern und preisgekröntem Restaurant.",
      priceRange: "£120-180/Nacht",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      specialOffer: 'Nennen Sie "Menia&Florian" für 15% Rabatt'
    },
    {
      name: "Cotswold Manor Hotel",
      location: "Broadway (8 Minuten vom Veranstaltungsort)",
      description: "Luxushotel in einem Herrenhaus aus dem 16. Jahrhundert mit Spa-Einrichtungen und schönen Gärten.",
      priceRange: "£200-350/Nacht",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      specialOffer: 'Nennen Sie "Menia&Florian" für 20% Rabatt'
    },
    {
      name: "Meadowside B&B",
      location: "Mickleton (5 Minuten vom Veranstaltungsort)",
      description: "Charmantes familiengeführtes B&B mit hausgemachtem Frühstück und wunderschönem Blick aufs Land.",
      priceRange: "£80-120/Nacht",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c50a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      specialOffer: 'Nennen Sie "Menia&Florian" für 10% Rabatt'
    },
    {
      name: "The Lygon Arms",
      location: "Broadway (10 Minuten vom Veranstaltungsort)",
      description: "Ikonisches Hotel mit 600 Jahren Geschichte, kürzlich renoviert mit modernem Luxus.",
      priceRange: "£180-280/Nacht",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      specialOffer: "Gruppenbuchung verfügbar"
    },
    {
      name: "Honeysuckle Cottage",
      location: "Hidcote (7 Minuten vom Veranstaltungsort)",
      description: "Selbstversorger-Cottage perfekt für Familien, bietet Platz für bis zu 6 Gäste.",
      priceRange: "£150-200/Nacht",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      specialOffer: "Mindestaufenthalt 2 Nächte"
    },
    {
      name: "The Old Barn",
      location: "Broad Campden (3 Minuten vom Veranstaltungsort)",
      description: "Umgebaute Scheune aus dem 18. Jahrhundert mit modernen Annehmlichkeiten und Landschaftsblick.",
      priceRange: "£100-160/Nacht",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      specialOffer: "Haustierfreundliche Option verfügbar"
    }
  ];

  return (
    <section id="accommodation" className="py-20 bg-wedding-creme">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light text-wedding-dark-brown mb-4">
            Übernachtungsmöglichkeiten
          </h2>
          <p className="text-lg text-wedding-medium-brown max-w-2xl mx-auto">
            Wir haben Sonderpreise in diesen schönen lokalen Unterkünften arrangiert
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={accommodation.image}
                alt={`${accommodation.name} - charming accommodation near wedding venue`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-wedding-dark-brown mb-2">
                  {accommodation.name}
                </h3>
                <p className="text-sm text-wedding-medium-brown mb-3 flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  {accommodation.location}
                </p>
                <p className="text-wedding-dark-brown text-sm mb-4">
                  {accommodation.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-wedding-medium-brown font-semibold">
                    {accommodation.priceRange}
                  </span>
                  <div className="text-xs text-wedding-dark-brown flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    {accommodation.rating}/5
                  </div>
                </div>
                <div className="mt-4 text-xs text-wedding-medium-brown">
                  {accommodation.specialOffer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-xl font-semibold text-wedding-dark-brown mb-4">
              Buchungsinformationen
            </h3>
            <p className="text-wedding-dark-brown mb-4">
              Wir empfehlen, Unterkünfte so bald wie möglich zu buchen, besonders für Juni-Wochenenden. 
              Alle aufgelisteten Unterkünfte wurden über unsere Hochzeitsgesellschaft informiert.
            </p>
            <p className="text-sm text-wedding-medium-brown">
              Für Hilfe bei Buchungen oder alternative Optionen kontaktieren Sie uns bitte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
